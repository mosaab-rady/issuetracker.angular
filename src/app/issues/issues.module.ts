import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuesRoutingModule } from './issues-routing.module';
import { AllIssuesComponent } from './pages/all-issues/all-issues.component';
import { IssuesTableComponent } from './components/issues-table/issues-table.component';


@NgModule({
  declarations: [
    AllIssuesComponent,
    IssuesTableComponent
  ],
  imports: [
    CommonModule,
    IssuesRoutingModule
  ]
})
export class IssuesModule { }
