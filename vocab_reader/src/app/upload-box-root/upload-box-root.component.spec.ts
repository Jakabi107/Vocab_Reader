import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBoxRootComponent } from './upload-box-root.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {UploadBoxComponent} from "../upload-box/upload-box.component";
import {AddFieldButtonComponent} from "../add-field-button/add-field-button.component";
describe('UploadBoxRootComponent', () => {
  let component: UploadBoxRootComponent;
  let fixture: ComponentFixture<UploadBoxRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadBoxRootComponent, UploadBoxComponent, AddFieldButtonComponent],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(UploadBoxRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //issue not 100% clean
  it('should not let fieldCount get under 2', ()=>{

    component.fieldsCount = 2;
    expect(component.fieldsCount)
      .withContext("change to 2")
      .toEqual(2)

    component.fieldsCount = 10;
    expect(component.fieldsCount)
      .withContext("change to greater than 2")
      .toEqual(10)

    component.fieldsCount = 10;
    component.fieldsCount = -1;
    expect(component.fieldsCount)
      .withContext("change to lover than 2 - should keep value")
      .toEqual(10)

  })

  it('should add field when modifyUploadBoxCount called', ()=>{
    let html = fixture.nativeElement
    let elementCount:number = html.querySelectorAll(".uploadBox").length

    component.modifyUploadBoxCount(1)

    fixture.detectChanges()
    let newElementCount:number = html.querySelectorAll(".uploadBox").length
    expect(newElementCount)
      .withContext("after function called")
      .toEqual(elementCount +1 )
  })
});
