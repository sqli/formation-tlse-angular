# Bookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

# Practice 07 Directive

## Attribute directive
- Create uppercase directive
  ```
  ng generate d shared/uppercase
  ```
- In uppercase-directive  
  Inject the dom element in the constructor and modify it's style
   ```typescript
  constructor(el: ElementRef) {
    el.nativeElement.style['text-transform'] = 'uppercase';
   }
  ```

- In book-template  
  Just add the directive to the name's tag
  ```html
  <p appUppercase>{{book.title}}</p>
   ```
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
