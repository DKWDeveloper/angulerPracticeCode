import { TestBed } from '@angular/core/testing';

import { SerciveService } from './sercive.service';

describe('SerciveService', () => {
  let service: SerciveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerciveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
