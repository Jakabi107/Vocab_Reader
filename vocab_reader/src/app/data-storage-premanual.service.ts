import { Injectable } from '@angular/core';
import {VocabData} from "./vocab-data";

@Injectable({
  providedIn: 'root'
})
export class DataStoragePremanualService {

  data : VocabData = new VocabData();

  constructor() {

  }
}
