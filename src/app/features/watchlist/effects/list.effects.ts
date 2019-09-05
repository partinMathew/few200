import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../../../actions/app.actions';
import * as listActions from '../actions/list.actions';
import { switchMap, tap, map } from 'rxjs/operators';
import { ListEntity } from '../reducers/list.reducer';
import { pipe } from 'rxjs';
@Injectable()
export class ListEffects {
  readonly url = 'http://localhost:3000/shows'; // this should be in an environment. Will be covered in 300

  constructor(private actions$: Actions, private client: HttpClient) { }

  loadShowsOnAppStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      switchMap(() => this.client.get<ListEntity[]>(this.url)
        .pipe(
          map(items => listActions.showsLoaded({ shows: items }))
        )
      )
    ), { dispatch: true }
  );

  saveShowToServer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.showAdded),
      map(a => a.entity),
      switchMap(a => this.client.post<ListEntity>(this.url, { title: a.title })
        .pipe(
          map(result => listActions.showAddedSuccess({ oldid: a.id, newEntity: result }))
        )
      )
    ), { dispatch: true }
  );

}

interface ListPostRequest {
  title: string;
}
