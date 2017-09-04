# Bookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

# Practice 09 HTTP

## Call to a web API
- In app-module 
  You need to install the HttpClientModule
   ```typescript
  import {HttpClientModule} from '@angular/common/http';
  [...]
   imports: [
    BrowserModule,
    FlexLayoutModule,
    MdListModule,
    MdToolbarModule,
    MdCardModule,
    BrowserAnimationsModule,
    HttpClientModule
  ]
  ```
- In book-service
  - Inject the http client in the constructor
  - Call it to build an [observable](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html)
  ```typescript
  constructor(private http: HttpClient) {}
  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }
  ```
- In book-list-components  
Subscribe to the [observable](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html)
  ```typescript
  ngOnInit(): void {
    this.bookService.getAll().subscribe(books => this.books = books);
  }
  ```

## Test
- In book-service-spec
  - Inject the testing module and controller
  ```typescript
  import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
  ```
  - Mock the http response
  ```typescript
  it('expects a GET request and two book', 
    inject([BookService, HttpTestingController], 
    (service: BookService, httpMock: HttpTestingController) => {
       service.getAll().subscribe(books => expect(books.length).toEqual(2));
       const req = httpMock.expectOne('/api/books');
       expect(req.request.method).toEqual('GET');
       req.flush([{title: 'Germinal', author:"zola"}, {title: 'Nana', author:"zola"}]);
       httpMock.verify();
    })
  );
  ```

## Interceptor
