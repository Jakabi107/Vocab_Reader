import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualReviewConatainerComponent } from './manual-review-conatainer.component';

describe('ManualReviewConatainerComponent', () => {
  let component: ManualReviewConatainerComponent;
  let fixture: ComponentFixture<ManualReviewConatainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualReviewConatainerComponent]
    });
    fixture = TestBed.createComponent(ManualReviewConatainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
