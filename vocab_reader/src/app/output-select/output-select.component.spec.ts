import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputSelectComponent } from './output-select.component';

describe('OutputSelectComponent', () => {
  let component: OutputSelectComponent;
  let fixture: ComponentFixture<OutputSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputSelectComponent]
    });
    fixture = TestBed.createComponent(OutputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
