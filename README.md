# Bookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

# Practice 10 Router Basis

- In app-module 
  - You need to import the RouterModule
   ```typescript
  import { RouterModule, Routes } from '@angular/router';
  ```
  - and inject it the routes
   ```typescript
   const appRoutes: Routes = [
     { path: 'book/:id', component: BookComponent },
     { path: '', component: BookListComponent , pathMatch: 'full'},
   ]
   [...]
   imports: [
     [...]
     RouterModule.forRoot(appRoutes)
   ]
  ```
- In app-component
  - Add a link
  ```html
  <a routerLink="/"><md-icon>home</md-icon></a>
  ```
  - Add the router-outlet 
  ```html
  <router-outlet></router-outlet>
  ```
- In book-list-component  
  Replace the list of books with a list of links
  ```typescript
  <md-list>
    <a *ngFor="let book of books" [routerLink]="['/book',book.id]">
        <md-list-item>{{book.title}}</md-list-item>
    </a>
  </md-list>
  ```
- In book-components  
  - Subscribe to the paramMap's [observable](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html)
  - Call the book service to get the selected book
  ```typescript
  ngOnInit() {
     this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        return this.service.get(+params.get('id'));
      }).subscribe( book => this.book = book);
  }
  ```

## Test
- In book-service-spec
  - Inject the testing module
  ```typescript
  import { RouterTestingModule } from '@angular/router/testing';
  ```