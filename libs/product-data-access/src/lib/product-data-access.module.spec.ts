import { async, TestBed } from '@angular/core/testing';
import { ProductDataAccessModule } from './product-data-access.module';

describe('ProductDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProductDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProductDataAccessModule).toBeDefined();
  });
});
