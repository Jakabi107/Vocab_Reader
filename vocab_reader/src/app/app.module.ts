import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadBoxComponent } from './upload-box/upload-box.component';
import { UploadBoxRootComponent } from './upload-box-root/upload-box-root.component';
import { AddFieldButtonComponent } from './add-field-button/add-field-button.component';
import { ManualReviewRootComponent } from './manual-review-root/manual-review-root.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadBoxComponent,
    UploadBoxRootComponent,
    AddFieldButtonComponent,
    ManualReviewRootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
