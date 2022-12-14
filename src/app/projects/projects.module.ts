import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllProjectsComponent,
    ProjectDetailComponent,
    ProjectCardComponent,
    CreateProjectComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule, ReactiveFormsModule],
})
export class ProjectsModule {}
