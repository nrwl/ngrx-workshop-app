import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '@ngrx-workshop-app/cart-data-access';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { CartEffects } from './cart.effects';

describe('CartEffects', () => {
  let actions$: Observable<any>;
  let effects: CartEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule
      ],
      providers: [CartEffects, provideMockActions(() => actions$), CartService]
    });

    effects = TestBed.get<CartEffects>(CartEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
