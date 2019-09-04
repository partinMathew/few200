import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';
export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};


// Selector Functions
const selectCounter = (state: AppState) => state.counter;

export const selectCurrentCount = createSelector(selectCounter, c => c.current);
export const selectCountBy = createSelector(selectCounter, c => c.by);
export const selectDecrementDisabled = createSelector(selectCurrentCount, selectCountBy, (c, b) => (c - b) < 0);

