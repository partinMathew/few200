import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as appActions from '../../../actions/app.actions';
import * as listActions from '../actions/list.actions';
import { switchMap, tap, map } from 'rxjs/operators';
import { ListEntity } from '../reducers/list.reducer';

@Injectable()
export class ListEffects {
  readonly url = 'http://localhost:3000/books'; // should be in an environment

  constructor(private actions$: Actions, private client: HttpClient) {}

  loadShowsOnAppStart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(appActions.applicationStarted),
        switchMap(() =>
          this.client
            .get<ListEntity[]>(this.url)
            .pipe(map(items => listActions.booksLoaded({ books: items })))
        )
      ),
    { dispatch: true }
  );

  saveBookToServer$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(listActions.bookAdded),
        map(a => a.entity),
        switchMap(a =>
          this.client
            .post<ListEntity>(this.url, {
              title: a.title,
              author: a.author,
              format: a.format
            })
            .pipe(
              map(result =>
                listActions.bookAddedSuccess({ oldid: a.id, newEntity: result })
              )
            )
        )
      ),
    { dispatch: true }
  );
}

interface ListPostRequest {
  title: string;
  author: string;
  format: string;
}
