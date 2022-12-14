import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { CreateProjectDto } from '../Dtos/CreateProjectDto';
import { ProjectDto } from '../Dtos/ProjectDto';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  GetAllProjects(): Observable<ProjectDto[]> {
    return this.http.get<ProjectDto[]>(`${enviroment.apiUrl}/api/projects`, {
      withCredentials: true,
    });
  }

  CreateProject(project: CreateProjectDto): Observable<object> {
    return this.http.post(`${enviroment.apiUrl}/api/projects`, project, {
      withCredentials: true,
    });
  }
}
