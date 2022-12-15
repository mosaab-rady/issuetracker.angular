import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { CreateProjectDto } from '../Dtos/CreateProjectDto';
import { ProjectDto } from '../Dtos/ProjectDto';
import { UpdateProjectDto } from '../Dtos/UpdateProjectDto';

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

  GetProject(id: string): Observable<ProjectDto> {
    return this.http.get<ProjectDto>(
      `${enviroment.apiUrl}/api/projects/${id}`,
      {
        withCredentials: true,
      }
    );
  }

  CreateProject(project: CreateProjectDto): Observable<object> {
    return this.http.post(`${enviroment.apiUrl}/api/projects`, project, {
      withCredentials: true,
    });
  }

  DeleteProject(id: string): Observable<object> {
    return this.http.delete(`${enviroment.apiUrl}/api/projects/${id}`, {
      withCredentials: true,
    });
  }

  UpdateProject(
    updateProjectDto: UpdateProjectDto,
    id: string
  ): Observable<ProjectDto> {
    return this.http.put<ProjectDto>(
      `${enviroment.apiUrl}/api/projects/${id}`,
      updateProjectDto,
      { withCredentials: true }
    );
  }
}
