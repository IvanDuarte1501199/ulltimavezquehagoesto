import { TestBed } from '@angular/core/testing';

import { ProductoRepoService } from './producto-repo.service';

describe('ProductoRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoRepoService = TestBed.get(ProductoRepoService);
    expect(service).toBeTruthy();
  });
});
