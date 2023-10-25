import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  sendRequest(){

  }

  output = new Observable<Output>()

}

interface Output {
  data:string[]
}
