# Bookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

# Practice 07 Directive
- create capitalize directive
  ```
  ng generate d shared/capitalize
  ```
- In uppercase-directive  
  Inject the dom element in the constructor and modify it's style
   ```typescript
  constructor(el: ElementRef) {
    el.nativeElement.style["text-transform"] = 'uppercase';
   }
  ```

- In book-component  
  Just add the directive to the name's tag
  ```typescript
  <p appUppercase>{{book.title}}</p>
   ```