import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkExperienceComponent} from './work-experience.component';
import {ExperienceComponent} from './experience/experience.component';
import {WorkExperience} from '../domain/work-experience';
import {MatIconModule} from '@angular/material/icon';
import {of} from 'rxjs';
import {BreakpointNames, ViewportService} from '../../service/viewport.service';

describe('WorkExperienceComponent', () => {

  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;
  let compiled: any;
  let mockViewportService: any;

  const latestExperience: WorkExperience = {
    company: 'Nuclear Power Plant',
    city: 'SpringField',
    dateRange: '2004 - 2009',
    title: 'job',
    description: 'hello',
    companyLink: 'link'
  };
  const earliestExperience: WorkExperience = {
    company: 'McDuff',
    city: 'SpringField',
    dateRange: '1989 - 2004',
    title: 'job',
    description: 'hello',
    companyLink: 'link'
  };
  const earlyMiddleExperience: WorkExperience = {
    company: 'Other',
    city: 'SpringField',
    dateRange: '1989 - 2004',
    title: 'job',
    description: 'hello',
    companyLink: 'link'
  };
  const laterMiddleExperience: WorkExperience = {
    company: 'Other',
    city: 'SpringField',
    dateRange: '1989 - 2009',
    title: 'job',
    description: 'hello',
    companyLink: 'link'
  };

  beforeEach(async () => {

    mockViewportService = {
      getViewportClass: jasmine.createSpy('getViewportClass').and.returnValue(of(BreakpointNames.Medium))
    };

    await TestBed.configureTestingModule({
      declarations: [
        WorkExperienceComponent,
        ExperienceComponent,
      ],
      providers: [
        {provide: ViewportService, useValue: mockViewportService},
      ],
      imports: [MatIconModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    component.workExperienceTitle = 'experience:';
    component.allWorkExperience = [
      latestExperience, earliestExperience, earlyMiddleExperience, laterMiddleExperience
    ];
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

  it('should display an icon', () => {
    const workExperienceIcon = compiled.querySelector('#work-experience-icon');
    expect(workExperienceIcon.textContent).toEqual('location_city');
  });

  it('should display a title', () => {
    expect(compiled.querySelector('#work-experience-title').textContent)
      .toEqual('EXPERIENCE:');
  });

  it('should display at least one experience components', () => {
    expect(compiled.querySelector('.experience-container')).toBeTruthy();
  });

  it('should return a sorted array of job experience when called', () => {
    expect(component.getWorkExperience()[0]).toEqual(latestExperience);
  });

});
