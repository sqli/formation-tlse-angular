import { TestBed, inject } from '@angular/core/testing';

import { BookService } from './book.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

  it('expects a GET request and two book',
    inject([BookService, HttpTestingController],
      (service: BookService, httpMock: HttpTestingController) => {
        service.getAll().subscribe(books => expect(books.length).toEqual(2));
        const req = httpMock.expectOne('/api/books');
        expect(req.request.method).toEqual('GET');
        req.flush([{ title: 'Germinal', author: 'zola' }, { title: 'Nana', author: 'zola' }]);
        httpMock.verify();
      }
    )
  );
});
