import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingMethodSelectionDialogComponent } from './shipping-method-selection-dialog.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MatDialogRef } from '@angular/material/dialog';

describe('ShippingMethodSelectionDialogComponent', () => {
  let component: ShippingMethodSelectionDialogComponent;
  let fixture: ComponentFixture<ShippingMethodSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingMethodSelectionDialogComponent],
      providers: [
        provideMockStore(),
        { provide: MatDialogRef, useValue: { close: () => {} } }
      ]
    }).compileComponents();
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
