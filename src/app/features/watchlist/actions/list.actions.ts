import { createAction, props } from '@ngrx/store';
import { ListEntity } from '../reducers/list.reducer';

let fakeId = -1;

export const showAdded = createAction(
  '[watchlist] list show added',
  ({ title }: { title: string }) => ({
    entity: {
      id: fakeId-- + 'F',
      title
    } as ListEntity
  })
);

export const showsLoaded = createAction(
  '[watchlist] list shows loaded',
  props<{ shows: ListEntity[] }>()
);

export const showAddedSuccess = createAction(
  '[watchlist] list show added successfully',
  props<{ oldid: string, newEntity: ListEntity }>()
);
