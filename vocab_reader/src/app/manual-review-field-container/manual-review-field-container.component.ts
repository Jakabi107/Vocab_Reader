import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VocabData} from "../vocab-data";

@Component({
  selector: 'app-manual-review-field-container',
  templateUrl: './manual-review-field-container.component.html',
  styleUrls: ['./manual-review-field-container.component.css']
})
export class ManualReviewFieldContainerComponent {

  public fieldScrollPos: number = 0;
  @Input() data:VocabData = new VocabData();
  @Output() reviewedData = new EventEmitter<VocabData>();
  _reviewedData:VocabData = new VocabData();

  fieldUpdate(field_name:string, field_content:string[]) {
    this._reviewedData.insertField(field_name, field_content);
  }

  submit() {
    this.addFieldIfNotReviewed();
    this.reviewedData.emit(this._reviewedData);
  }

  addFieldIfNotReviewed() {

    let field_names = this.data.getFieldNames();
    let reviewed_field_names = this._reviewedData.getFieldNames();
    for (let field_name of field_names) {
      if (!reviewed_field_names.includes(field_name)) {
        this._reviewedData.insertField(field_name, this.data.getField(field_name));
      }
    }

  }

}
