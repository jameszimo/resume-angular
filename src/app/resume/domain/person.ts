import {WorkExperience} from './work-experience';
import {Education} from './education';
import {Competency} from './competency';

export class Person {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  profile: string;
  jobTitle: string;
  workExperience: WorkExperience[];
  educations: Education[];
  competencies: Competency[];

  constructor(person: any) {
    this.firstName = person.firstName;
    this.lastName = person.lastName;
    this.city = person.city;
    this.state = person.state;
    this.phone = person.phone;
    this.email = person.email;
    this.profile = person.profile;
    this.jobTitle = person.jobTitle;
    this.workExperience = person.workExperience;
    this.educations = person.educations;
    this.competencies = person.competencies;
  }
}
