# Bookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

# Practice 11 Router Child-route

## Modularity
- create a book module  
  ```
  ng g module book
  ```

- Move all the book's stuff from the app-module to the book-module 
  - book-module
   ```typescript
  const bookRoutes: Routes = [
    { path: 'book/:id', component: BookComponent },
    { path: '', component: BookListComponent, pathMatch: 'full' },
  ];


  @NgModule({
    imports: [
      CommonModule,
      FlexLayoutModule,
      MdListModule,
      MdToolbarModule,
      MdCardModule,
      MdIconModule,
      RouterModule.forChild(bookRoutes)
    ],
    declarations: [    
      BookComponent,
      UppercaseDirective,
      BookListComponent
    ]
  })
  ```
  - app-module
   ```typescript
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MdToolbarModule,
      MdIconModule,
      BookModule,
      RouterModule.forRoot([]),
    ],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptorService,
      multi: true,
    }],
    bootstrap: [AppComponent]
  })
  ``` 

## Child Route
  - create a devanture component  
  ```
  ng g book/devanture book
  ```
  - in book-module  
  Make devanture component the root component of the module
  ```typescript
  const bookRoutes: Routes = [
    {
      path: 'book', component: DevantureComponent,
      children: [
        {
          path: ':id',
          component: BookComponent
        },
        {
          path: '',
          component: BookListComponent
        }
      ]
    },
  ] ;

  ```
  - in devanture-template  
  Add a router-outlet and a welcome message !
  ```html
  <h1 class="mat-headline">Welcome !</h1>
  <router-outlet></router-outlet>
  ```