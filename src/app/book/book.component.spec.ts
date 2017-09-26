import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

import { MdCardModule } from '@angular/material';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [MdCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = { id: 1, title: 'Germinal', author: 'zola' };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should render Author in a md-card-content tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-card-content').textContent).toContain('zola');
  }));

  it('should update Author in a md-card-content tag', async(() => {
    component.book.author = 'Hugo';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-card-content').textContent).toContain('Hugo');
  }));
});


