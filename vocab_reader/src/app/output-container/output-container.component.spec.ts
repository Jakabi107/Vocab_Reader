import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputContainerComponent } from './output-container.component';

describe('OutputContainerComponent', () => {
  let component: OutputContainerComponent;
  let fixture: ComponentFixture<OutputContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputContainerComponent]
    });
    fixture = TestBed.createComponent(OutputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
