import { TestBed } from '@angular/core/testing';

import { CardDatabaseShareService } from './card-database-share.service';

describe('FireDatabaseDatashareService', () => {
  let service: CardDatabaseShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDatabaseShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
