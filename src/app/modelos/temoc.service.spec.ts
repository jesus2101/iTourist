import { TestBed } from '@angular/core/testing';

import { TemocService } from './temoc.service';

describe('TemocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemocService = TestBed.get(TemocService);
    expect(service).toBeTruthy();
  });
});
