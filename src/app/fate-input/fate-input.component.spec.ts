import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FateInputComponent } from './fate-input.component';

describe('FateEditorComponent', () => {
  let component: FateInputComponent;
  let fixture: ComponentFixture<FateInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
