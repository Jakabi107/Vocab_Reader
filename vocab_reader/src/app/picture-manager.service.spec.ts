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
      service.add(new File([],""), -1)
    }
    catch {threwError = true;}

    expect(threwError)
      .toBeTrue();
  })

  it('should give you a subarray of the data from 0 to ativeFieldsCount when calling getActive', () =>{
    service.add(new File([],"0"),0)
    service.add(new File([],"1"), 1)
    service.add(new File([],"2"), 2)
    service.add(new File([],"3"), 3)

    service.activeFieldsCount = 2
    expect( JSON.stringify(service.getActive()) )
      .toEqual( JSON.stringify( [new File([],"0"), new File([],"1")] ) )
  })

  it('should return true if called isCompleted when all "aktive fields" have a value', ()=>{

    service.activeFieldsCount = 3;

    expect(service.isCompleted())
      .withContext("with nothing")
      .toBeFalse()

    service.add(new File([],"1"), 1)

    expect(service.isCompleted())
      .withContext("with one file")
      .toBeFalse()

    service.add(new File([],"1"), 2)
    expect(service.isCompleted())
      .withContext("with two files")
      .toBeFalse()

    service.add(new File([],"1"), 0)

    expect(service.isCompleted())
      .withContext("completed")
      .toBeTrue()
  })
});
