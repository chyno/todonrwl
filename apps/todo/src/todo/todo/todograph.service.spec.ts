import { TestBed } from '@angular/core/testing';

import { TodographService } from './todograph.service';

describe('TodographService', () => {
  let service: TodographService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodographService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
