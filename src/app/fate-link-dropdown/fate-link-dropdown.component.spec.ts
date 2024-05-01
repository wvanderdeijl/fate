import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FateLinkDropdownComponent } from './fate-link-dropdown.component';

describe('FateLinkDorpdownComponent', () => {
  let component: FateLinkDropdownComponent;
  let fixture: ComponentFixture<FateLinkDropdownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FateLinkDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateLinkDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
