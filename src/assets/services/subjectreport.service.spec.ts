import { TestBed } from '@angular/core/testing';

import { SubjectreportService } from './subjectreport.service';

describe('SubjectreportService', () => {
  let service: SubjectreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
