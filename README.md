# Bookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

# Practice 05 Component
- create book directory 
- book.ts
```typescript
  export class Book {
    id: number;
    title: string;
    author: string;
  }
```

- create book component
ng g c book/book --flat

- book-component
   Add a book property
   ```typescript
    book: Book = {
      id: 1,
      title: 'Quatrevingt-treize',
      author: 'Hugo',
  }
  ```
- book.html
   Display a card with book's properties
    ```html
   <md-card>
     <md-card-header>
        {{book.title}}
     </md-card-header>
     <md-card-content>
        {{book.author}}
     </md-card-content>
   </md-card>
 ```
- book.css
   Add card style
   ```css
    md-card {
      margin-top:10px;
      width: 200px;
    }
    ```



