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

  it("should add a field if it's not reviewed", () => {
    let data = component.data;
    data.insertField("test", ["test1", "test2", "test3"]);
    component.data = data;
    component.addFieldIfNotReviewed();
    expect(component._reviewedData.getField("test")).toEqual(["test1", "test2", "test3"]);
  });

});
