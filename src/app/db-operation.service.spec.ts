import { TestBed } from '@angular/core/testing';

import { DbOperationService } from './db-operation.service';

describe('DbOperationService', () => {
  let service: DbOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
