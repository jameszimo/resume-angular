import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Person} from '../resume/domain/person';
import {JAMES} from "../resume/domain/james";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor() {
  }

  getResumePerson(): Observable<Person> {
    return of(JAMES);
  }
}
