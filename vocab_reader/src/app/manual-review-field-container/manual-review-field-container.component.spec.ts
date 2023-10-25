import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualReviewFieldContainerComponent } from './manual-review-field-container.component';

describe('ManualReviewFieldContainerComponent', () => {
  let component: ManualReviewFieldContainerComponent;
  let fixture: ComponentFixture<ManualReviewFieldContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualReviewFieldContainerComponent]
    });
    fixture = TestBed.createComponent(ManualReviewFieldContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
