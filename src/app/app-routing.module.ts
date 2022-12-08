import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmEmailComponent } from './auth/Components/confirm-email/confirm-email.component';
import { EmailConfirmedComponent } from './auth/Components/email-confirmed/email-confirmed.component';
import { LoginComponent } from './auth/Components/login/login.component';
import { SignupComponent } from './auth/Components/signup/signup.component';

const routes: Routes = [
  { path: 'login', title: 'Login | Issue Tracker', component: LoginComponent },
  {
    path: 'signup',
    title: 'Sign Up | Issue Tracker',
    component: SignupComponent,
  },
  {
    path: 'confirm-email',
    title: 'Confirm Email | Issue Tracker',
    component: ConfirmEmailComponent,
  },
  {
    path: 'email-confirmed',
    title: 'Email Confirmed | Issue Tracker',
    component: EmailConfirmedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
