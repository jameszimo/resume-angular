export class WorkExperience {
  company: string;
  city: string;
  dateRange: string;
  title: string;
  description: string;
  companyLink: string;

  constructor(experience: any) {
    this.company = experience.company;
    this.city = experience.city;
    this.dateRange = experience.dateRange;
    this.title = experience.title;
    this.description = experience.description;
    this.companyLink = experience.companyLink;
  }
}
