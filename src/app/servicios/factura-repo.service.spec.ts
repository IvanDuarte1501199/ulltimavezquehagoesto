import { TestBed } from '@angular/core/testing';

import { FacturaRepoService } from './factura-repo.service';

describe('FacturaRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacturaRepoService = TestBed.get(FacturaRepoService);
    expect(service).toBeTruthy();
  });
});
