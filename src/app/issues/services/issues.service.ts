import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IssueDto } from '../Dtos/IssueDto';
import { enviroment } from 'src/enviroments/enviroment';
import { CreateIssueDto } from '../Dtos/CreateIssueDto';
import { UpdateIssueDto } from '../Dtos/UpdateIssueDto';
import { ProjectDto } from 'src/app/projects/Dtos/ProjectDto';
import { UserDto } from 'src/app/users/Dtos/UserDto';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  constructor(private http: HttpClient) {}

  GetAllIssues(): Observable<IssueDto[]> {
    return this.http.get<IssueDto[]>(`${enviroment.apiUrl}/api/issues`, {
      withCredentials: true,
    });
  }

  GetIssue(id: string): Observable<IssueDto> {
    return this.http.get<IssueDto>(`${enviroment.apiUrl}/api/issues/${id}`, {
      withCredentials: true,
    });
  }

  CreateNewIssue(issue: CreateIssueDto): Observable<Object> {
    return this.http.post(`${enviroment.apiUrl}/api/issues`, issue, {
      withCredentials: true,
    });
  }

  UpdateIssue(issue: UpdateIssueDto, id: string): Observable<IssueDto> {
    return this.http.put<IssueDto>(
      `${enviroment.apiUrl}/api/issues/${id}`,
      issue,
      {
        withCredentials: true,
      }
    );
  }

  DeleteIssue(id: string): Observable<object> {
    return this.http.delete(`${enviroment.apiUrl}/api/issues/${id}`, {
      withCredentials: true,
    });
  }

  CloseIssue(id: string): Observable<IssueDto> {
    return this.http.post<IssueDto>(
      `${enviroment.apiUrl}/api/issues/${id}/close`,
      {},
      { withCredentials: true }
    );
  }

  GetProjectOfIssue(issueId: string): Observable<ProjectDto> {
    return this.http.get<ProjectDto>(
      `${enviroment.apiUrl}/api/issues/${issueId}/project`,
      { withCredentials: true }
    );
  }

  getUsersAssignedToIssue(issueId: string): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(
      `${enviroment.apiUrl}/api/issues/${issueId}/users`,
      { withCredentials: true }
    );
  }

  // Edit Users in issue
  // get issue tags
  // update issue tags
  // get issue priority
  // update issue priority
}
