import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [LandingPageComponent],
  exports: [LandingPageComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class LandingPageModule {}
