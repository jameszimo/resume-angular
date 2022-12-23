import {Component, Input, OnInit} from '@angular/core';
import {Competency} from '../domain/competency';
import {ViewportService} from '../../service/viewport.service';

@Component({
  selector: 'competencies',
  templateUrl: './competencies.component.html',
  styleUrls: ['./competencies.component.scss']
})
export class CompetenciesComponent implements OnInit {

  @Input() competencies: Competency[] = [];
  competenciesTitle = 'Skills:';
  viewportSizeClass: string = "";

  constructor(private viewportService: ViewportService) {
  }

  ngOnInit(): void {
    this.viewportService.getViewportClass().subscribe(result => this.viewportSizeClass = result);
  }

  getScrambledCompetencies(): Competency[] {
    const competenciesToReturn = this.competencies;
    let m = this.competencies.length;
    let t;
    let i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = competenciesToReturn[m];
      competenciesToReturn[m] = competenciesToReturn[i];
      competenciesToReturn[i] = t;
    }

    return competenciesToReturn;
  }
}
