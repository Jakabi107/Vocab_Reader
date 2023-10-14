import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureManagerService {
  constructor() { }
  private files: File[] = [];

  public add (imgPath:File, index:number){
    if (index < 0) throw Error("Given Index is invalid")
    this.files[index] = imgPath;
  }

  public get (index:number ) : any {
    if (this.files[index] == undefined) return undefined;
    else return this.files[index]
  }


  public activeFieldsCount:number = 0;

  public getActive () : File[] {
    return this.files.slice(0, this.activeFieldsCount)
  }

  public isCompleted ():boolean{
    let activeFiles = this.getActive()
    if (activeFiles.length < this.activeFieldsCount) return false;

    return Object.values(activeFiles).length === activeFiles.length;
  }

  //TODO update active Fields count when sending request to server

}
