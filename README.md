# Bookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

# Practice 06 Service
- create book service
  ```
  ng g s book/book --flat
  ```
- In book-service   
Add a get method
   ```typescript
  get(): Book {
    return {
      id: 1,
      title: 'Quatrevingt-treize',
      author: 'Hugo',
    }
  }
  ```
- In book-component  
   Add the service to the provider
   ```typescript
    providers: [BookService]
   ```
   Inject the service in the constructor
   ```typescript
    constructor(private bookService: BookService) { }
   ```
   Call the service on component initialization
   ```typescript
    ngOnInit() {
      this.book = this.bookService.get();
    }
   ```