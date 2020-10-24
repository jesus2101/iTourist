import { TestBed } from '@angular/core/testing';

import { MiguelService } from './miguel.service';

describe('MiguelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiguelService = TestBed.get(MiguelService);
    expect(service).toBeTruthy();
  });
});
