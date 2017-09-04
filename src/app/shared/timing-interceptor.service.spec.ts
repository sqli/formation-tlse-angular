import { TestBed, inject } from '@angular/core/testing';

import { TimingInterceptorService } from './timing-interceptor.service';

describe('TimingInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimingInterceptorService]
    });
  });

  it('should be created', inject([TimingInterceptorService], (service: TimingInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
