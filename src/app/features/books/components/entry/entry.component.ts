import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksState } from '../../reducers';
import { bookAdded } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  constructor(private store: Store<BooksState>) {}

  ngOnInit() {}

  addBook(
    titleEl: HTMLInputElement,
    authorEl: HTMLInputElement,
    formatEl: HTMLInputElement
  ) {
    this.store.dispatch(
      bookAdded({
        title: titleEl.value,
        author: authorEl.value,
        format: formatEl.value
      })
    );
    titleEl.value = '';
    authorEl.value = '';
    formatEl.value = '';
    titleEl.focus();
  }
}
