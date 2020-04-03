import { TestBed } from '@angular/core/testing';

import { GService } from './g.service';

describe('GService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GService = TestBed.get(GService);
    expect(service).toBeTruthy();
  });
});
