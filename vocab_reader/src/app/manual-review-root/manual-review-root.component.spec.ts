import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualReviewRootComponent } from './manual-review-root.component';

describe('ManualReviewRootComponent', () => {
  let component: ManualReviewRootComponent;
  let fixture: ComponentFixture<ManualReviewRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualReviewRootComponent]
    });
    fixture = TestBed.createComponent(ManualReviewRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
