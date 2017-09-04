import { UppercaseDirective } from './uppercase.directive';
import { ElementRef } from '@angular/core';

export class MockElementRef extends ElementRef {
  constructor() { super({style:{}}); }
}

describe('UppercaseDirective', () => {
  it('should create an instance', () => {
    let el = new MockElementRef();
    const directive = new UppercaseDirective(el);
    expect(directive).toBeTruthy();
  });
});