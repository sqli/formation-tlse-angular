# Bookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

# Practice 08 Data-Binding

## Property binding
- Create a book's list component
  ```
  ng generate c book/bookList --flat
  ```
- In book-component  
  Mark book as a target of data-binding as input properties using decorators
   ```typescript
  import { Component, Input } from '@angular/core';
  import { Book } from './book';

  @Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
  })
  export class BookComponent {
    @Input() book: Book;

    constructor() { }
  }
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
 
## Structural directive

 - In book-service  
   Add a method returning a array of books
   ```typescript
   getAll(): Book[] 
   ```
- In book-component  
  Call the new method to gets books
  ```typescript
  this.books = this.bookService.getAll();
  ```
- In book-template  
  Add a div around the card with a *ngFor to loop through books
  ```html
  <div *ngFor="let book of books">
  ```
