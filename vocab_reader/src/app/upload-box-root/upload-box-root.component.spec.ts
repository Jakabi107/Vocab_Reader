import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBoxRootComponent } from './upload-box-root.component';

describe('UploadBoxRootComponent', () => {
  let component: UploadBoxRootComponent;
  let fixture: ComponentFixture<UploadBoxRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadBoxRootComponent]
    });
    fixture = TestBed.createComponent(UploadBoxRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
