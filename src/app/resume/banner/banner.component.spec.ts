import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BannerComponent} from './banner.component';
import {MatIconModule} from '@angular/material/icon';
import {BreakpointNames, ViewportService} from '../../service/viewport.service';
import {of} from 'rxjs';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let compiled: any;
  let mockViewportService: any;

  beforeEach(async () => {

    mockViewportService = {
      getViewportClass: jasmine.createSpy('getViewportClass').and.returnValue(of(BreakpointNames.Medium))
    };

    await TestBed.configureTestingModule({
      declarations: [
        BannerComponent
      ],
      providers: [
        {provide: ViewportService, useValue: mockViewportService},
      ],
      imports: [MatIconModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    component.firstName = 'John';
    component.lastName = 'Smith';
    component.city = 'AnyTown, USA';
    component.phone = '555-555-5555';
    component.email = 'john.smith@email.com';
    component.jobTitle = 'Job Title';
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

  describe('Contact', () => {

    it('should display a banner portrait', () => {
      expect(compiled.querySelector('.banner-portrait')).toBeTruthy();
    });

    it('should hide the banner portrait when the viewport size is XSmall', () => {

      component.viewportSizeClass = BreakpointNames.XSmall;
      fixture.detectChanges();
      compiled = fixture.nativeElement;

      expect(compiled.querySelector('.banner-portrait-container')).toBeFalsy();
    });

    it('should display correct name', () => {
      expect(compiled.querySelector('#resume-name').textContent).toEqual('John Smith');
    });

    it('should display correct city', () => {
      expect(compiled.querySelector('#resume-city').textContent).toEqual('AnyTown, USA');
    });

    it('should display a location icon', () => {
      expect(compiled.querySelector('.banner-contact-location-icon').textContent).toEqual('location_on');
    });

    it('should display correct phone', () => {
      expect(compiled.querySelector('#resume-phone').textContent).toEqual('555-555-5555');
    });

    it('should display a phone icon', () => {
      expect(compiled.querySelector('.banner-contact-phone-icon').textContent).toEqual('phone');
    });

    it('should display correct email', () => {
      expect(compiled.querySelector('#resume-email').textContent).toEqual('john.smith@email.com');
    });

    it('should display an email icon', () => {
      expect(compiled.querySelector('.banner-contact-email-icon').textContent).toEqual('email');
    });

    it('should display correct jobTitle', () => {
      expect(compiled.querySelector('.banner-job-title').textContent).toEqual('Job Title');
    });
  });

});
