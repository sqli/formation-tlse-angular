import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthorService } from './author.service';

describe('AuthorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([AuthorService], (service: AuthorService) => {
    expect(service).toBeTruthy();
  }));

  it('expects a GET request and get one author',
    inject([AuthorService, HttpTestingController],
      (service: AuthorService, httpMock: HttpTestingController) => {
        service.getAll().subscribe(authors => expect(authors.length).toEqual(1));
        const req = httpMock.expectOne('/api/authors');
        expect(req.request.method).toEqual('GET');
        req.flush([{ name: 'zola' }]);
        httpMock.verify();
      }
    )
  );
});
