import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ResumeComponent} from './resume.component';
import {Person} from './domain/person';
import {of} from 'rxjs';
import {PersonService} from '../service/person.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/compiler';
import {BannerComponent} from './banner/banner.component';
import {ProfileComponent} from './profile/profile.component';
import {ExperienceComponent} from './work-experience/experience/experience.component';
import {WorkExperienceComponent} from './work-experience/work-experience.component';
import {WorkExperience} from './domain/work-experience';
import {EducationComponent} from './education/education.component';
import {Education} from './domain/education';
import {Competency} from './domain/competency';
import {CompetenciesComponent} from './competencies/competencies.component';
import {MatIconModule} from '@angular/material/icon';
import {SourceControlComponent} from './source-control/source-control.component';
import {BreakpointNames, ViewportService} from '../service/viewport.service';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;
  let compiled: any;
  let mockPersonService: any;
  let mockViewportService: any;

  const workExperience: WorkExperience = {
    company: 'McDuff',
    city: 'SpringField',
    dateRange: '1989 - 2004',
    title: 'job',
    description: 'hello',
    companyLink: 'link'
  };

  const education: Education = {
    id: 1,
    degree: 'bachelor of nuclear safety',
    school: 'springfield vo-tech',
    city: 'springfield',
    state: 'OH',
    link: 'link'
  };

  const competencies: Competency[] = [
    {
      id: 1,
      name: 'beer drinking',
      link: 'link'
    },
    {
      id: 2,
      name: 'sleeping',
      link: 'link'
    }
  ];

  const person = new Person({
    firstName: 'John',
    lastName: 'Smith',
    city: 'AnyTown, USA',
    phone: '555-555-5555',
    email: 'john.smith@email.com',
    profile: '',
    jobTitle: 'jobTitle',
    workExperience: [workExperience],
    educations: [education],
    competencies
  });

  beforeEach(async () => {
    mockPersonService = {
      getResumePerson: jasmine.createSpy('getResumePerson').and.returnValue(of(person))
    };

    mockViewportService = {
      getViewportClass: jasmine.createSpy('getViewportClass').and.returnValue(of(BreakpointNames.Medium))
    };

    await TestBed.configureTestingModule({
      declarations: [
        ResumeComponent,
        BannerComponent,
        ProfileComponent,
        ExperienceComponent,
        WorkExperienceComponent,
        EducationComponent,
        CompetenciesComponent,
        SourceControlComponent
      ],
      providers: [
        {provide: PersonService, useValue: mockPersonService},
        {provide: ViewportService, useValue: mockViewportService},
      ],
      imports: [MatIconModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    component.viewportSizeClass = '';
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to the viewport service and set the viewportSize', () => {
    expect(component.viewportSizeClass).toEqual(BreakpointNames.Medium);
  });

  it('should display a banner section', () => {
    expect(compiled.querySelector('#banner')).toBeTruthy();
  });

  it('should display a profile section', () => {
    expect(compiled.querySelector('#profile')).toBeTruthy();
  });

  it('should display a work experience section', () => {
    expect(compiled.querySelector('#work-experience')).toBeTruthy();
  });

  it('should display an education section', () => {
    expect(compiled.querySelector('#education-container')).toBeTruthy();
  });

  it('should display a competencies section', () => {
    expect(compiled.querySelector('#competencies-container')).toBeTruthy();
  });

  it('should display a source control component on the page', () => {
    expect(compiled.querySelector('source-control')).toBeTruthy();
  });
});
