import { TestBed } from '@angular/core/testing';

import { FireDatabaseDatashareService } from './fire-database-datashare.service';

describe('FireDatabaseDatashareService', () => {
  let service: FireDatabaseDatashareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireDatabaseDatashareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
