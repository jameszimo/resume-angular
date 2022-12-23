import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ProfileComponent} from './profile.component';
import {MatIconModule} from '@angular/material/icon';
import {of} from 'rxjs';
import {BreakpointNames, ViewportService} from '../../service/viewport.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let compiled: any;
  let mockViewportService: any;

  beforeEach(async () => {

    mockViewportService = {
      getViewportClass: jasmine.createSpy('getViewportClass').and.returnValue(of(BreakpointNames.Medium))
    };

    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
        {provide: ViewportService, useValue: mockViewportService},
      ],
      imports: [MatIconModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.profileTitle = 'Profile Title';
    component.profileContent = 'Profile statement';
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

  it('should display profile title', () => {
    expect(compiled.querySelector('#profile-title').textContent).toEqual('PROFILE TITLE');
  });

  it('should display an icon', () => {
    const profileIcon = compiled.querySelector('#profile-icon');
    expect(profileIcon.textContent).toEqual('account_box');
  });

  it('should display profile content', () => {
    expect(compiled.querySelector('#profile-content').textContent).toEqual('Profile statement');
  });
});
