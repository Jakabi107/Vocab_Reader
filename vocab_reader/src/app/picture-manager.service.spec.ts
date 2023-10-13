import { TestBed } from '@angular/core/testing';

import { PictureManagerService } from './picture-manager.service';

describe('PictureManagerService', () => {
  let service: PictureManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // add()
  it('should yield error when given invalid index by #get', ()=>{
    let threwError:boolean = false;
    try {
      service.add(undefined, -1)
    }
    catch {threwError = true;}

    expect(threwError)
      .toBeTrue();
  })
});
