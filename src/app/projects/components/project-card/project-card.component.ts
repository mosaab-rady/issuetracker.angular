import { Component, Input } from '@angular/core';
import { ProjectDto } from '../../Dtos/ProjectDto';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project!: ProjectDto;
}
