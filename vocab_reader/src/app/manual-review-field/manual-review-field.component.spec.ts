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

  it('should put the field_content into the textarea', () => {
    component.field_content = ["hello", "world"];
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector('textarea');
    expect(textarea.value).toEqual("hello\nworld");

    // Second to test that it updates
    component.field_content = ["test", "2", "3"];
    fixture.detectChanges();
    expect(textarea.value).toEqual("test\n2\n3");
  });

  it('should emit value to Output when text in textfield is changed', () => {
    spyOn(component.field_content_changed, 'emit');
    const textarea = fixture.nativeElement.querySelector('textarea');
    textarea.value = "test\n2\n3";
    textarea.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    expect(component.field_content_changed.emit).toHaveBeenCalledWith(["test", "2", "3"]);
  });
});
