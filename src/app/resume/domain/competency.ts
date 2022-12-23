export class Competency {
  id: number;
  name: string;
  link: string;
  imageName?: string;

  constructor(competency: any) {
    this.id = competency.id;
    this.name = competency.name;
    this.link = competency.link;
    this.imageName = competency.imageName;
  }
}
