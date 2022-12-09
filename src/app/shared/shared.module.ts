import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [NavbarComponent, LayoutComponent, NotFoundComponent],
  imports: [CommonModule],
})
export class SharedModule {}
