import {Education} from './education';

describe('Education', () => {
  it('should create an instance', () => {
    expect(new Education(
      {
        degree: 'test',
        school: 'test',
        city: 'test',
        state: 'test'
      }
    )).toBeTruthy();
  });
});
