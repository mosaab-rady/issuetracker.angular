import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoleDto } from '../../Dtos/RoleDto';
import { UsersService } from 'src/app/users/services/users.service';
// import { RolesService } from '../../services/roles.service';
import { UserDto } from 'src/app/users/Dtos/UserDto';
// import { Observable } from 'rxjs';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { enviroment } from 'src/enviroments/enviroment';
import { RolesService } from '../../services/roles.service';
import { AssignUserDto } from 'src/app/users/Dtos/AssignUserDto';

@Component({
  selector: 'app-edit-users-in-role',
  templateUrl: './edit-users-in-role.component.html',
  styleUrls: ['./edit-users-in-role.component.css'],
})
export class EditUsersInRoleComponent implements OnInit {
  @Input() role!: RoleDto;

  @Output() isModalOpenEvent = new EventEmitter();
  @Output() assignedUsersEvent = new EventEmitter<UserDto[]>();
  hideModal(): void {
    this.isModalOpenEvent.emit();
  }

  users: UserDto[] = [];
  imageBaseUrl = enviroment.awsUrl;
  btnValue = 'Update';
  btnState: boolean = false;

  /**
   *
   */
  constructor(
    private usersService: UsersService,
    private rolesService: RolesService
  ) {}

  ngOnInit(): void {
    this.assignUsersForm.controls.usersForm.clear();

    this.usersService.GetAllUsers().subscribe({
      next: (v) => {
        this.users = v;
      },
      complete: () => {
        this.AddUsersToFormArray();
      },
    });
  }

  assignUsersForm = new FormGroup({
    usersForm: new FormArray([
      new FormGroup({
        Email: new FormControl(),
        UserId: new FormControl(),
        IsSelected: new FormControl(),
        Image: new FormControl(),
      }),
    ]),
  });

  AddUsersToFormArray(): void {
    for (const user of this.users) {
      const isSelected: boolean = user.roles.includes(this.role.name);
      const userFormGroup = new FormGroup({
        Email: new FormControl(user.email, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        UserId: new FormControl(user.id, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        IsSelected: new FormControl(isSelected),
        Image: new FormControl(user.image),
      });

      this.assignUsersForm.controls.usersForm.push(userFormGroup);
    }
  }

  submit(): void {
    this.btnValue = 'Wait....';
    this.btnState = true;

    this.edit();
  }

  edit(): void {
    const assignUsersDto: AssignUserDto[] = [];
    for (const user of this.assignUsersForm.value.usersForm!) {
      assignUsersDto.push({
        email: user.Email,
        userId: user.UserId,
        isSelected: user.IsSelected,
      });
    }
    this.rolesService
      .EditUsersInRole(assignUsersDto, this.role.id)
      .subscribe((value) => {
        this.isModalOpenEvent.emit(false);
        this.assignedUsersEvent.emit(value);
      });
  }
}
