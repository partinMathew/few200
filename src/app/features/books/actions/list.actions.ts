import { createAction, props } from '@ngrx/store';
import { ListEntity } from '../reducers/list.reducer';

let fakeId = -1;

export const bookAdded = createAction(
  '[books] list book added',
  ({
    title,
    author,
    format
  }: {
    title: string;
    author: string;
    format: string;
  }) => ({
    entity: {
      id: fakeId-- + 'F',
      title,
      author,
      format
    } as ListEntity
  })
);

export const booksLoaded = createAction(
  '[books] list books loaded',
  props<{ books: ListEntity[] }>()
);

export const bookAddedSuccess = createAction(
  '[books] list book added succesfully',
  props<{ oldid: string; newEntity: ListEntity }>()
);
