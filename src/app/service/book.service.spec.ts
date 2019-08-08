import { TestBed } from './node_modules/@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
