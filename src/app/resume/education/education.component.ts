import {Component, Input, OnInit} from '@angular/core';
import {Education} from '../domain/education';
import {ViewportService} from '../../service/viewport.service';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationTitle = 'Education:';
  viewportSizeClass: string = "";

  @Input() educations: Education[] = [];

  constructor(private viewportService: ViewportService) { }

  ngOnInit(): void {
    this.viewportService.getViewportClass().subscribe(result => this.viewportSizeClass = result);
  }

  getEducation(): Education[] {
    return this.educations
      .sort(
        (a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0
      );
  }
}
