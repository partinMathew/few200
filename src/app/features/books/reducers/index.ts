import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as models from '../models';

export const featureName = 'booksFeature';

export interface BooksState {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};

// Selectors
const selectFeature = createFeatureSelector<BooksState>(featureName);

const selectListBranch = createSelector(
  selectFeature,
  f => f.list
);

const { selectAll: selectAllListEntities } = fromList.adapter.getSelectors(
  selectListBranch
);

export const selectBookItems = createSelector(
  selectAllListEntities,
  e => e as models.BooksListItem[]
);
