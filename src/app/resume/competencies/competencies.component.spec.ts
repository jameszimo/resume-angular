import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CompetenciesComponent} from './competencies.component';
import {Competency} from '../domain/competency';
import {MatIconModule} from '@angular/material/icon';
import {of} from 'rxjs';
import {BreakpointNames, ViewportService} from '../../service/viewport.service';

describe('CompetenciesComponent', () => {
  let component: CompetenciesComponent;
  let fixture: ComponentFixture<CompetenciesComponent>;
  let compiled: any;
  let mockViewportService: any;

  const competencies: Competency[] = [
    {id: 1, name: 'hello', link: 'http://hello.info', imageName: 'image.jpg'},
    {id: 2, name: 'goodbye', link: 'http://goodbye.com', imageName: 'image.jpg'},
    {id: 3, name: 'thanks for all the fish', link: 'http://hitchhiker.org', imageName: 'image.jpg'},
  ];

  beforeEach(async () => {

    mockViewportService = {
      getViewportClass: jasmine.createSpy('getViewportClass').and.returnValue(of(BreakpointNames.Medium))
    };

    await TestBed.configureTestingModule({
      declarations: [CompetenciesComponent],
      providers: [
        {provide: ViewportService, useValue: mockViewportService},
      ],
      imports: [MatIconModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciesComponent);
    component = fixture.componentInstance;
    component.competencies = competencies;
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
    const competencyIcon = compiled.querySelector('#competencies-icon');
    expect(competencyIcon.textContent).toEqual('keyboard');
  });

  it('should have a title', () => {
    expect(compiled.querySelector('#competencies-title').textContent).toEqual('SKILLS:');
  });

  it('should display competencies', () => {
    const foundValues: string[] = [];
    compiled.querySelectorAll('.competencies-competency').forEach(
        (competency: { textContent: string; }) => foundValues.push(competency.textContent)
    );

    competencies.forEach(expectedCompetency => expect(foundValues).toContain(expectedCompetency.name));
  });
});
