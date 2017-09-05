import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list.component';

import { MdListModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BookListComponent,
        BookComponent
      ],
      imports: [
        MdListModule,
        MdToolbarModule,
        MdCardModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
