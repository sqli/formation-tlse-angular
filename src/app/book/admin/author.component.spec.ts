import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AuthorComponent } from './author.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MdInputModule } from '@angular/material';

import { AuthorService } from '../author.service';
import { Author } from '../author';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorComponent],
      imports: [
        ReactiveFormsModule,
        MdInputModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [AuthorService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.authorForm.valid).toBeFalsy();
  });

  it('name field required', () => {
    const name = component.authorForm.controls['name'];
    expect(name.valid).toBeFalsy();
  });

  it('name field validity', () => {
    const name = component.authorForm.controls['name'];
    name.setValue('Hugo');
    expect(name.valid).toBeTruthy();
  });

  it('submit', () => {
    const authorService = TestBed.get(AuthorService);
    const spy = spyOn(authorService, 'create').and.returnValue({ subscribe: () => { } });

    const name = component.authorForm.controls.name;
    name.setValue('Hugo');
    expect(name.valid).toBeTruthy();

    component.onSubmit();
    const serviceArg: Author = spy.calls.first().args[0];
    expect(serviceArg.name).toBe('Hugo');
  });
});

