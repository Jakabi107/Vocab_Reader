import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-upload-box',
  templateUrl: './upload-box.component.html',
  styleUrls: ['./upload-box.component.css']
})
export class UploadBoxComponent {
  @Input({alias:"field_name"}) name:string = ""
  @Input({alias: "index"}) index:number = -1;

  @Output() imgData = new EventEmitter<imageDataInt>();

  public sendData(e:any){
    this.imgData.emit(
      {
        data: e.target.files[0],
        index: this.index
      })
  }

}

interface imageDataInt{
  data:File;
  index:number;
}
