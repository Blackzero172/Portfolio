import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageModule } from '../components/landing-page/landing-page.module';
import { AboutPageModule } from '../components/about-page/about-page.module';
import { SkillsPageModule } from 'src/components/skills-page/skills-page.module';
import { ProjectPageModule } from 'src/components/project-page/project-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    LandingPageModule,
    AboutPageModule,
    ProjectPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
