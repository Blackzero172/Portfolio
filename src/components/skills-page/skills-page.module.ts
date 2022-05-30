import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsPageComponent } from './skills-page.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
@NgModule({
  declarations: [SkillsPageComponent, ProgressBarComponent],
  exports: [SkillsPageComponent],
  imports: [CommonModule, MatProgressBarModule, MatCardModule],
})
export class SkillsPageModule {}
