import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserDto } from '../../Dtos/Users/UserDto';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  user!: UserDto;
  /**
   *
   */
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.auth.USER!;
  }
}
