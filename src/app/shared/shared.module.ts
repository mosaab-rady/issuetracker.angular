import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [NotFoundComponent, ToastComponent],
  imports: [CommonModule],
  exports: [ToastComponent],
})
export class SharedModule {}
