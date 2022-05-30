import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [AboutPageComponent],
  exports: [AboutPageComponent],
  imports: [CommonModule, MatCardModule],
})
export class AboutPageModule {}
