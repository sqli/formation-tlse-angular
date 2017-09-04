import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

import { MdListModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BookComponent
      ],
      imports: [MdListModule, MdToolbarModule, MdCardModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
