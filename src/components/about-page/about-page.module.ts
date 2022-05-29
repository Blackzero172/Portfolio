import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';

@NgModule({
  declarations: [AboutPageComponent],
  exports: [AboutPageComponent],
  imports: [CommonModule],
})
export class AboutPageModule {}
