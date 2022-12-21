import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'projects',
        loadChildren: () =>
          import('../projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: 'issues',
        loadChildren: () =>
          import('../issues/issues.module').then((m) => m.IssuesModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'adminstration',
        loadChildren: () =>
          import('../adminstration/adminstration.module').then(
            (m) => m.AdminstrationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
