import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminstrationRoutingModule } from './adminstration-routing.module';
import { ListRolesComponent } from './pages/list-roles/list-roles.component';
import { RoleCardComponent } from './components/role-card/role-card.component';
import { CreateRoleComponent } from './pages/create-role/create-role.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditRoleComponent } from './pages/edit-role/edit-role.component';
import { UsersInRoleComponent } from './components/users-in-role/users-in-role.component';
import { EditUsersInRoleComponent } from './components/edit-users-in-role/edit-users-in-role.component';

@NgModule({
  declarations: [
    ListRolesComponent,
    RoleCardComponent,
    CreateRoleComponent,
    EditRoleComponent,
    UsersInRoleComponent,
    EditUsersInRoleComponent,
  ],
  imports: [CommonModule, AdminstrationRoutingModule, ReactiveFormsModule],
})
export class AdminstrationModule {}
