import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserRowComponent } from './components/user-row/user-row.component';

@NgModule({
  declarations: [AllUsersComponent, UsersTableComponent, UserRowComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
