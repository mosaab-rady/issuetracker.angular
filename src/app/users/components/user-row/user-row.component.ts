import { Component, Input } from '@angular/core';
import { UserDto } from '../../Dtos/UserDto';
import { enviroment } from 'src/enviroments/enviroment';
import { UsersService } from '../../services/users.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ToastType } from 'src/app/shared/Dtos/Toast';

@Component({
  selector: '[app-user-row]',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css'],
})
export class UserRowComponent {
  @Input() user!: UserDto;
  isModalOpen: boolean = false;
  deleteBtnValue: string = 'Delete';
  deleteBtnState: boolean = false;
  baseImageUrl = enviroment.awsUrl;

  /**
   *
   */
  constructor(
    private usersService: UsersService,
    private toast: ToastService
  ) {}

  showConfirmDelete(): void {
    this.isModalOpen = true;
  }

  hideConfirmDelete(): void {
    this.isModalOpen = false;
  }

  DeleteUser(): void {
    this.deleteBtnValue = 'Wait....';
    this.deleteBtnState = true;

    this.usersService.DeleteUser(this.user.id).subscribe({
      error: (e) => {
        this.isModalOpen = false;
        this.deleteBtnState = false;
        this.deleteBtnValue = 'Delete';
        this.toast.show(
          `${e.error.detail || 'somthing went wrong please try again later.'}`,
          5,
          ToastType.Error
        );
      },
      complete: () => {
        location.reload();
      },
    });
  }
}
