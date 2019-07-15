import { async, TestBed } from '@angular/core/testing';
import { CartDataAccessModule } from './cart-data-access.module';

describe('CartDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CartDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CartDataAccessModule).toBeDefined();
  });
});
