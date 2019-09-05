import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as actions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';
import { tap, map, filter } from 'rxjs/operators';

@Injectable()
export class CounterEffects {

  readCountByForReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => localStorage.getItem('by')),
      filter(val => val !== null),
      map(val => parseInt(val, 10)),
      map(by => actions.setCountBy({ by }))
    )
  );

  writeCountByForReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.reset),
      tap(() => localStorage.setItem('by', '1'))
    ), { dispatch: false }
  );

  writeCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.setCountBy),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );

  constructor(private actions$: Actions) { }
}
