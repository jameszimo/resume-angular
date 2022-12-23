import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EducationComponent} from './education.component';
import {Education} from '../domain/education';
import {MatIconModule} from '@angular/material/icon';
import {of} from 'rxjs';
import {BreakpointNames, ViewportService} from '../../service/viewport.service';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  let compiled: any;
  let mockViewportService: any;

  const earlyEducation: Education = {
    id: 1,
    degree: 'High School Diploma',
    school: 'Springfield High School',
    city: 'Springfield',
    state: 'OH',
    link: 'link'
  };
  const ged: Education = {
    id: 1,
    degree: 'Middle School Diploma',
    school: 'Springfield Middle School',
    city: 'Springfield',
    state: 'OH',
    link: 'link'
  };
  const middleEducation: Education = {
    id: 2,
    degree: 'Bachelors in Nuclear Safety Engineering',
    school: 'Springfield Vo-Tech',
    city: 'Springfield',
    state: 'OH',
    link: 'link'
  };
  const latestEducation: Education = {
    id: 3,
    degree: 'Masters in Doughnut Inspection',
    school: 'Springfield Vo-Tech',
    city: 'Springfield',
    state: 'OH',
    link: 'link'
  };

  beforeEach(async () => {

    mockViewportService = {
      getViewportClass: jasmine.createSpy('getViewportClass').and.returnValue(of(BreakpointNames.Medium))
    };

    await TestBed.configureTestingModule({
      declarations: [EducationComponent],
      providers: [
        {provide: ViewportService, useValue: mockViewportService},
      ],
      imports: [MatIconModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    component.educationTitle = 'education:';
    component.educations = [latestEducation, ged, earlyEducation, middleEducation];
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
    const educationIcon = compiled.querySelector('#education-icon');
    expect(educationIcon.textContent).toEqual('school');
  });

  it('should display a title', () => {
    expect(compiled.querySelector('#education-title').textContent).toEqual('EDUCATION:');
  });

  it('should display educations', () => {
    expect(compiled.querySelector('.education-row')).toBeTruthy();
  });

  it('should return a sorted list of educations when called', () => {
    expect(component.getEducation()[3]).toEqual(latestEducation);
  });
});
