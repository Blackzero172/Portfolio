import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProjectCardComponent],
  exports: [ProjectCardComponent],
  imports: [CommonModule, MatButtonModule],
})
export class ProjectCardModule {}
