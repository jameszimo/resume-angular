export class Education {
  id: number;
  degree: string;
  school: string;
  city: string;
  state: string;
  link: string;

  constructor(education: any) {
    this.id = education.id;
    this.degree = education.degree;
    this.school = education.school;
    this.city = education.city;
    this.state = education.state;
    this.link = education.link;
  }
}
