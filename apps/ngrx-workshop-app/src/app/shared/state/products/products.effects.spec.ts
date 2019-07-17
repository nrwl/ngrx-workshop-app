import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProductService } from '@ngrx-workshop-app/product-data-access';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { ProductsEffects } from './products.effects';

describe('ProductsEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductsEffects,
        provideMockActions(() => actions$),
        ProductService
      ]
    });

    effects = TestBed.get<ProductsEffects>(ProductsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
