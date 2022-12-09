import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmEmailComponent } from './auth/Components/confirm-email/confirm-email.component';
import { EmailConfirmedComponent } from './auth/Components/email-confirmed/email-confirmed.component';
import { LoginComponent } from './auth/Components/login/login.component';
import { SignupComponent } from './auth/Components/signup/signup.component';
import { AuthGuard } from './auth/services/auth.guard';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
// import { AuthGuard } from './auth/services/auth.guard';

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
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found | Issue Tracker',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
