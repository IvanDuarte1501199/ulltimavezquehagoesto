import { TestBed } from '@angular/core/testing';

import { ItemRepoService } from './item-repo.service';

describe('ItemRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemRepoService = TestBed.get(ItemRepoService);
    expect(service).toBeTruthy();
  });
});
