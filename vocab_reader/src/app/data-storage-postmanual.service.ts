import { Injectable } from '@angular/core';
import {VocabData} from "./vocab-data";

@Injectable({
  providedIn: 'root'
})
export class DataStoragePostmanualService {

  data : VocabData = new VocabData();

  constructor() { }
}
