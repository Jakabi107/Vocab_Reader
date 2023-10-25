import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualReviewPreviewComponent } from './manual-review-preview.component';

describe('ManualReviewPreviewComponent', () => {
  let component: ManualReviewPreviewComponent;
  let fixture: ComponentFixture<ManualReviewPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualReviewPreviewComponent]
    });
    fixture = TestBed.createComponent(ManualReviewPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
