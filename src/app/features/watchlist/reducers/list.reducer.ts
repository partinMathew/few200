import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface ListEntity {
  id: string;
  title: string;
}

export interface ListState extends EntityState<ListEntity> {

}

export const adapter = createEntityAdapter<ListEntity>();

// const initialState = adapter.getInitialState();
const initialState: ListState = { // This is just test data use the commented out thing
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      title: 'Joker'
    },
    2: {
      id: '2',
      title: 'Game of Thrones'
    }
  }
};

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: ListState = initialState, action: Action) {
  return reducerFunction(state, action);
}



