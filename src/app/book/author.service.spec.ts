import { TestBed, inject } from '@angular/core/testing';

import { AuthorService } from './author.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AuthorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([AuthorService], (service: AuthorService) => {
    expect(service).toBeTruthy();
  }));
});
