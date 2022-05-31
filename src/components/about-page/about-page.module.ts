import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { MatCardModule } from '@angular/material/card';
import { SkillsPageModule } from '../skills-page/skills-page.module';
@NgModule({
  declarations: [AboutPageComponent],
  exports: [AboutPageComponent],
  imports: [CommonModule, MatCardModule, SkillsPageModule],
})
export class AboutPageModule {}
