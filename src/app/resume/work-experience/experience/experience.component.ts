import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() index: number = 0;
  @Input() company: string = "";
  @Input() city: string = "";
  @Input() dateRange: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() companyLink: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  getJobDescription(): string[] {
    return this.description.split('|');
  }

}
