# Bookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

# Practice 09 HTTP

## Property binding
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

- In book-template  
  Clean the *ngFor Loop to display only one book

- In book-list-template  
  Add a book component with a *ngFor to loop through books
   ```html
    <app-book [book]=book *ngFor="let book of books"></app-book>
    ```
 - In book-list-component  
  Add an attribute books and fill it with book service (cf previous practice)
    ```typescript
    export class BookListComponent implements OnInit {
      books: Book[];

      constructor(private bookService: BookService) { }
  
      ngOnInit(): void {
        this.books = this.bookService.getAll();
      }
    }
    ```
 - In app-component  

## Event binding 

 - In book-list-component  
   Add a method to fill a message in response to the an user click
   ```typescript
    message: String;
    [...]
    onClick(book: Book): void {
      this.message = `You click on ${book.title} !`
    }
   ```
 - In book-list-template  
    - Display the message
    - Bind the click event to the onClick method
    ```html
    {{message}}
    <app-book [book]=book *ngFor="let book of books" (click)="onClick(book)"></app-book>
    ```

