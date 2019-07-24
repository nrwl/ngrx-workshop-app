import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingMethodSelectionDialogComponent } from './shipping-method-selection-dialog.component';

describe('ShippingMethodSelectionDialogComponent', () => {
  let component: ShippingMethodSelectionDialogComponent;
  let fixture: ComponentFixture<ShippingMethodSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingMethodSelectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingMethodSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
