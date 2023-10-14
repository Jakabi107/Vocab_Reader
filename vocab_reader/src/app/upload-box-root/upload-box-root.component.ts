import { Component } from '@angular/core';
import {UploadBoxComponent} from "../upload-box/upload-box.component";
import {PictureManagerService} from "../picture-manager.service";

@Component({
  selector: 'app-upload-box-root',
  templateUrl: './upload-box-root.component.html',
  styleUrls: ['./upload-box-root.component.css'],

})
export class UploadBoxRootComponent {
  constructor(private imgManager:PictureManagerService) {
    this.updateUploadBoxes()
  }

  //add/removing logic
  private _fieldsCount = 2;
  private MIN_FIELDS = 2;
  get fieldsCount():number {
    return this._fieldsCount
  }

  set fieldsCount(val) {
    if(val >= this.MIN_FIELDS) this._fieldsCount = val;
  }

  fieldsArray = Array(0)

  public modifyUploadBoxCount (change:number){
    this.fieldsCount = this.fieldsCount + change;
    this.updateUploadBoxes()
  }

  private updateUploadBoxes (){
    this.fieldsArray = Array(this.fieldsCount)
  }


  // image managing
  addImageToManager(data:File, index:number){
    this.imgManager.add(data, index);
  }


}
