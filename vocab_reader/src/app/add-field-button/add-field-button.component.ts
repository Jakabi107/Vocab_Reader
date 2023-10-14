import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-field-button',
  templateUrl: './add-field-button.component.html',
  styleUrls: ['./add-field-button.component.css']
})
export class AddFieldButtonComponent {
  @Output() buttonClicked = new EventEmitter<number>()

  addButtonClicked = () =>{this.buttonClicked.emit(1)}
  removeButtonClicked = () =>{this.buttonClicked.emit(-1)}
}
