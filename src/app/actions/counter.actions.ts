import { createAction, props } from '@ngrx/store';
// these are created via a snippet, supposedly will be on jeffs github
export const increment = createAction(
  '[app counter] increment'
);

export const decrement = createAction(
  '[app counter] decrement'
);

export const reset = createAction(
  '[app counter] reset'
);

export const setCountBy = createAction(
  '[app counter] count by set',
  props<CountByProps>()
);

// only really necessary if the object becomes highly complicated
// can be passed to props in line
interface CountByProps {
  by: number;
}


