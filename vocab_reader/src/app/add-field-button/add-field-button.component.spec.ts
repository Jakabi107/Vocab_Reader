import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFieldButtonComponent } from './add-field-button.component';

describe('AddFieldButtonComponent', () => {
  let component: AddFieldButtonComponent;
  let fixture: ComponentFixture<AddFieldButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFieldButtonComponent]
    });
    fixture = TestBed.createComponent(AddFieldButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
