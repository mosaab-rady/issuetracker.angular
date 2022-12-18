import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
import { IssueDto } from '../../Dtos/IssueDto';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-all-issues',
  templateUrl: './all-issues.component.html',
  styleUrls: ['./all-issues.component.css'],
})
export class AllIssuesComponent {
  issues!: IssueDto[];
  /**
   *
   */
  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.issuesService
      .GetAllIssues()
      .subscribe((value) => (this.issues = value));
  }
}
