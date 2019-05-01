import { TestBed } from '@angular/core/testing';

import { CyclistService } from './cyclist.service';

describe('CyclistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CyclistService = TestBed.get(CyclistService);
    expect(service).toBeTruthy();
  });
});
