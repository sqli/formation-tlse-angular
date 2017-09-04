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
        req.flush([{ title: 'Germinal', author: 'zola' }, { title: 'Nana', author: 'zola' }]);
        httpMock.verify();
      }
    )
  );
  ```

## Interceptor
- Create the Timing Interceptor
  ```
  ng generate s shared/TimingInterceptor  --flat
  ```
- In app-module  
  Add the interceptor to the providers
  ```typescript
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptorService,
      multi: true,
    }]
  ```
- In timing-interceptor  
  - Make it extend HttpInterceptor
  ```typescript
  export class TimingInterceptorService implements HttpInterceptor {
  ```
  - Implement the intercept method
  ```typescript
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    //'Do' adds a side effect to an Observable without affecting the values on the stream
    return next.handle(req).do(event => {
      if (event instanceof HttpResponse) {
        const elapsed = Date.now() - started;
        console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
      }
    });
  }
  ```