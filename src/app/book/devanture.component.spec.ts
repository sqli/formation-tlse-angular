import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevantureComponent } from './devanture.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('DevantureComponent', () => {
  let component: DevantureComponent;
  let fixture: ComponentFixture<DevantureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevantureComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevantureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
