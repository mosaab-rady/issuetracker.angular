import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRolesComponent } from './pages/list-roles/list-roles.component';
import { CreateRoleComponent } from './pages/create-role/create-role.component';

const routes: Routes = [
  {
    path: 'list-roles',
    title: 'List Roles | Issue Tracker',
    component: ListRolesComponent,
  },
  {
    path: 'new-role',
    title: 'Create Role | Issue Tracker',
    component: CreateRoleComponent,
  },
  {
    path: '',
    redirectTo: 'list-roles',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminstrationRoutingModule {}
