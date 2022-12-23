import {Component, OnInit} from '@angular/core';
import {PersonService} from '../service/person.service';
import {Person} from './domain/person';
import {ViewportService} from '../service/viewport.service';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  person: Person | undefined;
  viewportSizeClass: string | undefined;

  constructor(private personService: PersonService, private viewportService: ViewportService) {
  }

  ngOnInit(): void {

    this.personService.getResumePerson().subscribe(
      result => this.person = result
    );

    this.viewportService.getViewportClass().subscribe(result => this.viewportSizeClass = result);
  }
}
