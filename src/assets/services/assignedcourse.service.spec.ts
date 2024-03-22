import { TestBed } from '@angular/core/testing';

import { AssignedcourseService } from './assignedcourse.service';

describe('AssignedcourseService', () => {
  let service: AssignedcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignedcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
