# Bookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

# Practice 12 Router Asynchronous routing

- create a admin module  
  ```
  ng g module admin
  ```
- create a root component to this module 
  ```
  ng g c admin/admin --flat
  ```
- create also a book component
  ```
  ng g c admin/book --flat
  ```
- create finally an author component  
  ```
  ng g c admin/author --flat
  ```
- in admin-module  
  Add routes to these components
  ```typescript
  const adminRoutes: Routes = [{
    path: '', component: AdminComponent,
    children: [
      {
        path: 'book',
        component: BookComponent
      },
      {
        path: 'author',
        component: AuthorComponent
      }
    ]
  }];
  ```
- in admin-template  
  Add a greeting, some navigation and a router-outlet
  ```html
  <h1 class="mat-headline">Welcome Admin !</h1>
  <button md-button [routerLink]="['book']">New book</button>
  <button md-button [routerLink]="['author']">New author</button>
  <router-outlet></router-outlet>
  ```
- in app-module  
  Add a asynchronous route to the admin module
  ```typescript
  const appRoutes: Routes = [
    { path: '', redirectTo: '/book', pathMatch: 'full' },
    {
      path: 'admin',
      loadChildren: 'app/admin/admin.module#AdminModule',
    }
  ];
  ```