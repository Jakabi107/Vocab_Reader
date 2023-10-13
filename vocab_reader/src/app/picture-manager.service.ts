import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureManagerService {
  constructor() { }
  private pictures: any[] = [];

  public add (picture:any, index:number){
    if (index < 0) throw Error("Given Index is invalid")
    this.pictures[index] = picture;
  }

  public get (index:number ) : any {
    if (this.pictures[index] == undefined) return undefined;
    else return this.pictures[index]
  }

}
