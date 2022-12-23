import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SourceControlComponent} from './source-control.component';

describe('SourceControlComponent', () => {
  let component: SourceControlComponent;
  let fixture: ComponentFixture<SourceControlComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourceControlComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a gitHub repo URL', () => {
    expect(compiled.querySelector('#source-control-url').textContent).toEqual(
        'https://github.com/jameszimo/resume-angular'
    );
  });

  it('should have a link to a GitHub Repo', () => {
    const gitHubUrl = compiled.querySelector('.gitHub').querySelector('a').href
    expect(gitHubUrl).toEqual('https://github.com/jameszimo/resume-angular');
  });

  it('should have the GitHub logo', () => {
    const gitHubLogoUrl = compiled.querySelector('.gitHub').querySelector('img').src
    const path = new URL(gitHubLogoUrl).pathname;
    expect(path).toEqual('/assets/images/github.png');
  });
});
