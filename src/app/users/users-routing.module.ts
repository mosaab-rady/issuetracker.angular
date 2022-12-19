import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './pages/all-users/all-users.component';

const routes: Routes = [
  {
    path: '',
    title: 'All Users | Issue Tracker',
    component: AllUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
