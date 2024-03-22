import { TestBed } from '@angular/core/testing';

import { TopnavbarService } from './topnavbar.service';

describe('TopnavbarService', () => {
  let service: TopnavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopnavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
