import { TestBed } from '@angular/core/testing';

import { ClienteRepoService } from './cliente-repo.service';

describe('ClienteRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteRepoService = TestBed.get(ClienteRepoService);
    expect(service).toBeTruthy();
  });
});
