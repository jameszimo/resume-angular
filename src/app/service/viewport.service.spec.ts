import {TestBed} from '@angular/core/testing';

import {BreakpointNames, ViewportService} from './viewport.service';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {of} from 'rxjs';

describe('ViewportService', () => {
  let service: ViewportService;
  let mockBreakpointObserver: any;

  const breakpointState: BreakpointState = {
    matches: true,
    breakpoints: {
      '(max-width: 599.99px)': true
    }
  };

  beforeEach(() => {

    mockBreakpointObserver = {
      observe: jasmine.createSpy('observe').and.returnValue(of(breakpointState))
    };

    TestBed.configureTestingModule({
      providers: [
        {provide: BreakpointObserver, useValue: mockBreakpointObserver},
      ],
    });
    service = TestBed.inject(ViewportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('getViewportClass()', () => {
    service.getViewportClass().subscribe(result => {
      expect(result).toEqual(BreakpointNames.XSmall);
    });
  });
});
