import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {BehaviorSubject, Observable} from 'rxjs';

export enum BreakpointNames {
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}

@Injectable({
  providedIn: 'root'
})
export class ViewportService {

  viewPortClassName = new BehaviorSubject<string>('XLarge');

  displayNameMap = new Map([
    [Breakpoints.XSmall, BreakpointNames.XSmall],
    [Breakpoints.Small, BreakpointNames.Small],
    [Breakpoints.Medium, BreakpointNames.Medium],
    [Breakpoints.Large, BreakpointNames.Large],
    [Breakpoints.XLarge, BreakpointNames.XLarge],
  ]);

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      this.dealWithBreakpoint(result);
    });
  }

  private dealWithBreakpoint(breakpointState: BreakpointState): void {

    for (const query of Object.keys(breakpointState.breakpoints)) {
      if (breakpointState.breakpoints[query]) {
        this.setViewPortClass(this.displayNameMap.get(query) ?? 'Unknown');
      }
    }
  }

  setViewPortClass(viewPortClass: string): void {
    this.viewPortClassName.next(viewPortClass);
  }

  getViewportClass(): Observable<string> {
    return this.viewPortClassName.asObservable();
  }
}
