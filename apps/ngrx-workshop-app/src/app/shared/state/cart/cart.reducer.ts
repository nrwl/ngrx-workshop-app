import { Action, createReducer } from '@ngrx/store';

// TOOD: Implement Cart State Interface extending from EntityState
export interface State {}

export const cartFeatureKey = 'cart';

// TODO: Implement Cart State Entity Adapter

// TODO: Implement Cart Initial State
export const initialState: State = {};

// TODO: Implement On handlers for each action
const cartReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return cartReducer(state, action);
}
