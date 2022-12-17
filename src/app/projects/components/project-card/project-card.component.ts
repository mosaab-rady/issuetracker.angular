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
  isModalOpen: boolean = false;
  deleteBtnValue: string = 'Delete';
  deleteBtnState: boolean = false;
  /**
   *
   */
  constructor(private projectsService: ProjectsService) {}

  deleteProject(): void {
    // document.getElementById(`confirm-${id}`)?.setAttribute('disabled', 'true');
    // document.getElementById(`confirm-${id}`)?.setAttribute('value', 'Wait....');
    this.deleteBtnState = true;
    this.deleteBtnValue = 'Wait....';

    this.projectsService.DeleteProject(this.project.id).subscribe({
      complete: async () => {
        location.reload();
      },
    });
  }

  showConfirmDelete(): void {
    // let modal = document.getElementById(id);

    // modal!.style.display = 'block';
    this.isModalOpen = true;

    // window.onclick = (e) => {
    //   if (e.target === modal) {
    //     // modal!.style.display = 'none';
    //     this.isModalOpen = false;
    //   }
    // };
  }

  hideConfirmDelete(): void {
    // document.getElementById(id)!.style.display = 'none';
    this.isModalOpen = false;
  }
}
