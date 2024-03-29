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
    component.fieldContent = ["hello", "world"];
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector('textarea');
    expect(textarea.value).toEqual("hello\nworld");

    // Second to test that it updates
    component.fieldContent = ["test", "2", "3"];
    fixture.detectChanges();
    expect(textarea.value).toEqual("test\n2\n3");
  });

  it('should emit value to Output when text in textfield is changed', () => {
    spyOn(component.fieldContentChanged, 'emit');
    const textarea = fixture.nativeElement.querySelector('textarea');
    textarea.value = "test\n2\n3";
    textarea.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    expect(component.fieldContentChanged.emit).toHaveBeenCalledWith(["test", "2", "3"]);
  });

  it('should reset content when Reset button is clicked', () => {
    component.fieldContent = ["test", "2", "3"];
    const textarea = fixture.nativeElement.querySelector('textarea');

    fixture.detectChanges();
    expect(textarea.value)
      .withContext("textarea should have the value of the field_content")
      .toEqual("test\n2\n3");

    textarea.value = "test\n2\n3\n4";
    textarea.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(textarea.value)
      .withContext("textarea should have the new value")
      .toEqual("test\n2\n3\n4");

    const reset_button = fixture.nativeElement.querySelector('button');
    reset_button.click();

    fixture.detectChanges();

    expect(textarea.value).toEqual("test\n2\n3");
  });
});
