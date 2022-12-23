import {WorkExperience} from './work-experience';

describe('WorkExperience', () => {
  it('should create an instance', () => {
    expect(new WorkExperience(
      {
        company: 'myCompany',
        city: 'myCity',
        dateRange: 'some date range',
        jobTitle: 'Job Title',
        description: ['description line 1', 'description line 2'],
      }
    )).toBeTruthy();
  });
});
