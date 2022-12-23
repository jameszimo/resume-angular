import {Competency} from './competency';

describe('Competency', () => {
  it('should create an instance', () => {
    expect(new Competency({id: 1, name: 'name', link: 'link'})).toBeTruthy();
  });
});
