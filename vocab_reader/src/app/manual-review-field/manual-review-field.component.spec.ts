import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualReviewFieldComponent } from './manual-review-field.component';

describe('ManualReviewFieldComponent', () => {
  let component: ManualReviewFieldComponent;
  let fixture: ComponentFixture<ManualReviewFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualReviewFieldComponent]
    });
    fixture = TestBed.createComponent(ManualReviewFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
