import { Component, OnInit } from '@angular/core';
import { WatchlistListItem } from '../../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WatchListState, selectWatchListItems } from '../../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items$: Observable<WatchlistListItem[]>;
  constructor(private store: Store<WatchListState>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectWatchListItems);
  }

}
