import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BookComponent } from './book.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MdInputModule, MdSelectModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [
        FormsModule,
        MdInputModule,
        MdSelectModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
