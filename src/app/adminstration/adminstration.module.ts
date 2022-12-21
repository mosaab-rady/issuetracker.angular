import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminstrationRoutingModule } from './adminstration-routing.module';
import { ListRolesComponent } from './pages/list-roles/list-roles.component';
import { RoleCardComponent } from './components/role-card/role-card.component';
import { CreateRoleComponent } from './pages/create-role/create-role.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListRolesComponent, RoleCardComponent, CreateRoleComponent],
  imports: [CommonModule, AdminstrationRoutingModule, ReactiveFormsModule],
})
export class AdminstrationModule {}
