import { TestBed } from '@angular/core/testing';

import { DataStoragePostmanualService } from './data-storage-postmanual.service';

describe('DataStoragePostmanualService', () => {
  let service: DataStoragePostmanualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStoragePostmanualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
