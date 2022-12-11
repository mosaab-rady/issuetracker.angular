import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IconsSidebarComponent } from './components/icons-sidebar/icons-sidebar.component';

@NgModule({
  declarations: [NavbarComponent, LayoutComponent, NotFoundComponent, SidebarComponent, IconsSidebarComponent],
  imports: [CommonModule],
})
export class SharedModule {}
