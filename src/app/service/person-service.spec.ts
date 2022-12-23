import {TestBed} from '@angular/core/testing';
import {PersonService} from './person.service';
import {JAMES} from "../resume/domain/james";

describe('PersonService', () => {

  let service: PersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonService);
  });

  afterEach(() => {
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return ResumePerson when getResumePerson is called', () => {

    service.getResumePerson().subscribe(result => {
      expect(result).toEqual(JAMES);
    });
  });

});
