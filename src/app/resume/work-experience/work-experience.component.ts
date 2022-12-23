import {Component, Input, OnInit} from '@angular/core';
import {WorkExperience} from '../domain/work-experience';
import {ViewportService} from '../../service/viewport.service';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  workExperienceTitle = 'experience:';
  viewportSizeClass: string = "";

  @Input() allWorkExperience: WorkExperience[] = [];

  constructor(private viewportService: ViewportService) {
  }

  ngOnInit(): void {
    this.viewportService.getViewportClass().subscribe(result => this.viewportSizeClass = result);
  }

  getWorkExperience(): WorkExperience[] {
    return this.allWorkExperience
      .sort(
        (a, b) => a.dateRange > b.dateRange ? -1 : a.dateRange < b.dateRange ? 1 : 0
      );
  }
}
