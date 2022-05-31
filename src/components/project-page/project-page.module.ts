import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './project-page.component';
import { ProjectCardModule } from '../project-card/project-card.module';

@NgModule({
  declarations: [ProjectPageComponent],
  exports: [ProjectPageComponent],
  imports: [CommonModule, ProjectCardModule],
})
export class ProjectPageModule {}
