import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [MdToolbarModule, MdCardModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
