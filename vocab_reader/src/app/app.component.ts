import { Component } from '@angular/core';
import {VocabData} from "./vocab-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vocab_reader';

  testData = new VocabData();
  constructor() {
    this.testData.insertField("test", ["test1", "test2", "test3"])
    this.testData.insertField("test2", ["test1", "test2", "test3"]);
  }
}
