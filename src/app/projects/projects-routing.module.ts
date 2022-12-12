import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: 'project/:id',
    component: ProjectDetailComponent,
  },
  {
    path: '',
    component: AllProjectsComponent,
    title: 'All Projects | Issue Tracker',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
