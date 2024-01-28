import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualReviewFieldContainerComponent } from './manual-review-field-container.component';
import {ManualReviewFieldComponent} from "../manual-review-field/manual-review-field.component";

describe('ManualReviewFieldContainerComponent', () => {
  let component: ManualReviewFieldContainerComponent;
  let fixture: ComponentFixture<ManualReviewFieldContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualReviewFieldContainerComponent, ManualReviewFieldComponent]
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

  it("should sync fields when scrolling", () => {
    let data = component.data;
    data.insertField("test", ["test1", "test2", "test3", "test2", "test3", "test2", "test3", "test2"]);
    data.insertField("test2", ["test1", "test2", "test3", "test2", "test3", "test2", "test3", "test2"]);

    fixture.detectChanges();

    let reviewFields = fixture.nativeElement.querySelectorAll(".reviewField");

    reviewFields[0].scrollTop = 10;
    reviewFields[0].dispatchEvent(new Event('scroll'));

    fixture.detectChanges();

    expect(reviewFields[1].scrollTop)
      .withContext("The second field should have the same scroll position as the first field")
      .toEqual(10);
  });

});
