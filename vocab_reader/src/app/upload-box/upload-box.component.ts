import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-upload-box',
  templateUrl: './upload-box.component.html',
  styleUrls: ['./upload-box.component.css']
})
export class UploadBoxComponent {
  @Input({alias:"field_name"}) name:string = ""
  @Input({alias: "index"}) index:number = -1;

  @Output() imgData = new EventEmitter<any>();
}
