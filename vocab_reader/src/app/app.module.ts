import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadBoxComponent } from './upload-box/upload-box.component';
import { UploadBoxRootComponent } from './upload-box-root/upload-box-root.component';
import { AddFieldButtonComponent } from './add-field-button/add-field-button.component';
import { ManualReviewRootComponent } from './manual-review-root/manual-review-root.component';
import { ManualReviewFieldComponent } from './manual-review-field/manual-review-field.component';
import { ManualReviewFieldContainerComponent } from './manual-review-field-container/manual-review-field-container.component';
import { ManualReviewPreviewComponent } from './manual-review-preview/manual-review-preview.component';
import { ManualReviewConatainerComponent } from './manual-review-conatainer/manual-review-conatainer.component';
import { OutputContainerComponent } from './output-container/output-container.component';
import { OutputSelectComponent } from './output-select/output-select.component';
import { OutputDisplayComponent } from './output-display/output-display.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadBoxComponent,
    UploadBoxRootComponent,
    AddFieldButtonComponent,
    ManualReviewRootComponent,
    ManualReviewFieldComponent,
    ManualReviewFieldContainerComponent,
    ManualReviewPreviewComponent,
    ManualReviewConatainerComponent,
    OutputContainerComponent,
    OutputSelectComponent,
    OutputDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
