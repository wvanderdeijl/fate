import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FateMaterialComponent } from './fate-material.component';

describe('FateMaterialComponent', () => {
  let component: FateMaterialComponent;
  let fixture: ComponentFixture<FateMaterialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FateMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
