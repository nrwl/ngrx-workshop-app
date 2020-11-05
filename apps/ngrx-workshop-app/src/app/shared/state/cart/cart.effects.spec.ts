import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '@ngrx-workshop-app/cart-data-access';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, ReplaySubject } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';

import { CartEffects } from './cart.effects';
import * as CartActions from './cart.actions';
import * as ProductsActions from '../products/products.actions';
import { Action } from '@ngrx/store';

describe('CartEffects', () => {
  let actions$: Observable<Action>;
  let effects: CartEffects;
  let cartServiceMock: any;

  beforeEach(() => {
    cartServiceMock = {
      getItems: jest.fn(),
      addToCart: jest.fn(),
    };
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
      ],
      providers: [
        CartEffects,
        provideMockActions(() => actions$),
        { provide: CartService, useValue: cartServiceMock },
      ],
    });

    effects = TestBed.inject<CartEffects>(CartEffects);
  });

  describe('Load cart on page enter', () => {
    it('should handle success case', (done) => {
      const mockItems = [{ productId: '1', itemId: '2' }];
      actions$ = new ReplaySubject(1);
      cartServiceMock.getItems.mockImplementation(() => of(mockItems));
      (actions$ as ReplaySubject<Action>).next(CartActions.enterCartPage());

      effects.loadCart$.subscribe((action) => {
        expect(action).toEqual(
          CartActions.loadCartSuccess({ items: mockItems })
        );
        done();
      });
    });
  });

  describe('Adding item to cart', () => {
    it('should  handle success case', () => {
      const mockItems = [{ itemId: '2', productId: '1' }];
      cartServiceMock.addToCart.mockImplementation(() =>
        cold('--c', { c: mockItems })
      );

      actions$ = hot('--a', {
        a: ProductsActions.addToCart({ productId: '1' }),
      });

      expect(effects.addToCart$).toBeObservable(
        cold('----b', {
          b: CartActions.addToCartSuccess({
            items: mockItems,
          }),
        })
      );
    });

    it('Should handle error case', () => {
      cartServiceMock.addToCart.mockImplementation(() =>
        cold('-#', null, new Error('Oops'))
      );

      actions$ = hot('--a', {
        a: ProductsActions.addToCart({ productId: '1' }),
      });

      expect(effects.addToCart$).toBeObservable(
        cold('---b', {
          b: CartActions.addToCartFailure({
            error: 'Unable to add item to cart',
          }),
        })
      );
    });
  });
});
