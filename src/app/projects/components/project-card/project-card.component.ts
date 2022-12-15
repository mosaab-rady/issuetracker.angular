import { Component, Input } from '@angular/core';
import { ProjectDto } from '../../Dtos/ProjectDto';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project!: ProjectDto;

  /**
   *
   */
  constructor(private projectsService: ProjectsService) {}

  deleteProject(id: string): void {
    document.getElementById(`confirm-${id}`)?.setAttribute('disabled', 'true');
    document.getElementById(`confirm-${id}`)?.setAttribute('value', 'Wait....');

    this.projectsService.DeleteProject(id).subscribe({
      complete: () => {
        location.reload();
      },
    });
  }

  showConfirmDelete(id: string): void {
    document.getElementById(id)!.style.display = 'block';
  }

  hideConfirmDelete(id: string): void {
    document.getElementById(id)!.style.display = 'none';
  }
}
