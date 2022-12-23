import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ResumeComponent} from "./resume/resume.component";
import {EducationComponent} from "./resume/education/education.component";
import {WorkExperienceComponent} from "./resume/work-experience/work-experience.component";
import {BannerComponent} from "./resume/banner/banner.component";
import {ProfileComponent} from "./resume/profile/profile.component";
import {ExperienceComponent} from "./resume/work-experience/experience/experience.component";
import {CompetenciesComponent} from "./resume/competencies/competencies.component";
import {SourceControlComponent} from "./resume/source-control/source-control.component";
import {MatIconModule} from "@angular/material/icon";

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ResumeComponent,
        BannerComponent,
        ProfileComponent,
        ExperienceComponent,
        WorkExperienceComponent,
        EducationComponent,
        CompetenciesComponent,
        SourceControlComponent
      ],
      imports: [MatIconModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'James Zimowsky Resume'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('James Zimowsky Resume');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#resume')).toBeTruthy();
  });
});
