import { TestBed } from '@angular/core/testing';

import { SingaltonService } from './singalton.service';

describe('SingaltonService', () => {
  let service: SingaltonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingaltonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
