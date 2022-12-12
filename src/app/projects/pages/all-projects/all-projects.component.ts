import { Component, OnInit } from '@angular/core';
import { ProjectDto } from '../../Dtos/ProjectDto';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
})
export class AllProjectsComponent implements OnInit {
  projects: ProjectDto[] | null = null;
  /**
   *
   */
  constructor(private ProjectsService: ProjectsService) {}

  ngOnInit(): void {
    this.ProjectsService.GetAllProjects().subscribe({
      next: (v: ProjectDto[]) => {
        this.projects = v;
      },
      complete: () => {
        console.log(this.projects);
      },
    });
  }
}
