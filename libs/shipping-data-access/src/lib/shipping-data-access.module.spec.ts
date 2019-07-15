import { async, TestBed } from '@angular/core/testing';
import { ShippingDataAccessModule } from './shipping-data-access.module';

describe('ShippingDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShippingDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShippingDataAccessModule).toBeDefined();
  });
});
