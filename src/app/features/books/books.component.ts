import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksState, selectBookItems } from './reducers';
import { Observable } from 'rxjs';
import { BooksListItem } from './models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  items$: Observable<BooksListItem[]>;
  constructor(private store: Store<BooksState>) {}

  ngOnInit() {
    this.items$ = this.store.select(selectBookItems);
  }
}
