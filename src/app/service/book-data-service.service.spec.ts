import { TestBed } from '@angular/core/testing';

import { BookDataServiceService } from './book-data-service.service';

describe('BookDataServiceService', () => {
  let service: BookDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
