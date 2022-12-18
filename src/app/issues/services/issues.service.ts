import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IssueDto } from '../Dtos/IssueDto';
import { enviroment } from 'src/enviroments/enviroment';
import { CreateIssueDto } from '../Dtos/CreateIssueDto';
import { UpdateIssueDto } from '../Dtos/UpdateIssueDto';

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
}
