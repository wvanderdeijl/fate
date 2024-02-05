import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FateBootstrapComponent } from './fate-bootstrap.component';

describe('FateBootstrapComponent', () => {
  let component: FateBootstrapComponent;
  let fixture: ComponentFixture<FateBootstrapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FateBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
