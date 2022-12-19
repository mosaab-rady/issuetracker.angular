import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuesRoutingModule } from './issues-routing.module';
import { AllIssuesComponent } from './pages/all-issues/all-issues.component';
import { IssuesTableComponent } from './components/issues-table/issues-table.component';
import { CreateIssueComponent } from './pages/create-issue/create-issue.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllIssuesComponent,
    IssuesTableComponent,
    CreateIssueComponent,
  ],
  imports: [CommonModule, IssuesRoutingModule, ReactiveFormsModule],
})
export class IssuesModule {}
