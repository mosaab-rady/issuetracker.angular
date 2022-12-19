import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllIssuesComponent } from './pages/all-issues/all-issues.component';
import { CreateIssueComponent } from './pages/create-issue/create-issue.component';

const routes: Routes = [
  {
    path: 'new-issue',
    title: 'Create Issue | Issue Tracker',
    component: CreateIssueComponent,
  },
  {
    path: '',
    title: 'All Issues',
    component: AllIssuesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssuesRoutingModule {}
