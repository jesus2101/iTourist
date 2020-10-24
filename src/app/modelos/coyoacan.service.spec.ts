import { TestBed } from '@angular/core/testing';

import { CoyoacanService } from './coyoacan.service';

describe('CoyoacanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoyoacanService = TestBed.get(CoyoacanService);
    expect(service).toBeTruthy();
  });
});
