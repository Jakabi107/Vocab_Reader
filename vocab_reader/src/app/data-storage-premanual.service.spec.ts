import { TestBed } from '@angular/core/testing';

import { DataStoragePremanualService } from './data-storage-premanual.service';

describe('DataStoragePremanualService', () => {
  let service: DataStoragePremanualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStoragePremanualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
