import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { BannerComponent } from './resume/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {CompetenciesComponent} from "./resume/competencies/competencies.component";
import {EducationComponent} from "./resume/education/education.component";
import {ProfileComponent} from "./resume/profile/profile.component";
import {SourceControlComponent} from "./resume/source-control/source-control.component";
import {WorkExperienceComponent} from "./resume/work-experience/work-experience.component";
import {ExperienceComponent} from "./resume/work-experience/experience/experience.component";

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    BannerComponent,
    CompetenciesComponent,
    EducationComponent,
    ProfileComponent,
    SourceControlComponent,
    ExperienceComponent,
    WorkExperienceComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
