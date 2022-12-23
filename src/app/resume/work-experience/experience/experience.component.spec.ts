import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ExperienceComponent} from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  let compile: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    component.company = 'Springfield Nuclear Power Plant';
    component.city = 'Springfield';
    component.dateRange = '1989 - Present';
    component.title = 'Nuclear Safety Inspector';
    component.description = 'Strengthened safety procedures that resulted in 75% fewer accidents on days I was absent|' +
      'Pioneered workplace stress-reduction methods that worked for at least one employee|' +
      'Sat around|' +
      'Consumed many doughnuts|';
    fixture.detectChanges();
    compile = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct company', () => {
    expect(compile.querySelector('.experience-company-name').textContent)
      .toEqual('Springfield Nuclear Power Plant');
  });

  it('should display correct city', () => {
    expect(compile.querySelector('.experience-company-city').textContent)
      .toEqual('Springfield');
  });

  it('should display correct date range', () => {
    expect(compile.querySelector('.experience-company-date-range').textContent)
      .toEqual('1989 - Present');
  });

  it('should display correct title', () => {
    expect(compile.querySelector('.experience-title').textContent)
      .toEqual('Nuclear Safety Inspector');
  });

  it('should display correct job description', () => {
    const jobDescription = compile.querySelector('.experience-description').textContent;

    component.description.split('|').forEach((item) => {
      expect(jobDescription).toContain('•' + item);
    });

  });
});
