import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserDto } from '../../../shared/Dtos/Users/UserDto';

@Component({
  selector: 'app-icons-sidebar',
  templateUrl: './icons-sidebar.component.html',
  styleUrls: ['./icons-sidebar.component.css'],
})
export class IconsSidebarComponent implements OnInit {
  user!: UserDto;
  userImage!: string;

  /**
   *
   */
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.auth.USER!;
    this.userImage =
      'https://mosaabportofoliobucket.s3.eu-west-3.amazonaws.com/' +
      this.user.image;
  }
}
