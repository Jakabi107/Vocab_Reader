import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-manual-review-field',
  templateUrl: './manual-review-field.component.html',
  styleUrls: ['./manual-review-field.component.css']
})
export class ManualReviewFieldComponent {
/*
  ngOnInit(): void {
    const textarea = document.querySelector('textarea')
    const lineNumbers = document.querySelector('.line-numbers')

    if (textarea == null || lineNumbers == null) return;

    textarea.addEventListener('keyup', event => {
      const numberOfLines = textarea.value.split("\n").length

      let lineNumbersValue = ""
      for (let i = 0; i < numberOfLines; i++) {
        lineNumbersValue += "<span style='display: block; height: 21px'>"+(i+1)+"</span>"
      }

      lineNumbers.innerHTML = lineNumbersValue
    })

    }
*/
  @Input() field_name: string = '';
  @Input() field_content: string[] = [];
  @Output() field_content_changed = new EventEmitter<string[]>();

  @ViewChild('textAreaElement') textarea: ElementRef | undefined;
  public arrayToMultilineString = (array: string[]):string => {return array.join('\n')};

  public updateFieldContentChanged (value:string) {
    this.field_content_changed.emit(value.split('\n'));
  }

  public resetFieldContent() {
    if (this.textarea == undefined) return;
    this.textarea.nativeElement.value = this.arrayToMultilineString(this.field_content);
  }

}
