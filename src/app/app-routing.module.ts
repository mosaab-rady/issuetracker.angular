import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/Components/login/login.component';
import { SignupComponent } from './auth/Components/signup/signup.component';

const routes: Routes = [
  { path: 'login', title: 'Login | Issue Tracker', component: LoginComponent },
  {
    path: 'signup',
    title: 'Sign Up | Issue Tracker',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
