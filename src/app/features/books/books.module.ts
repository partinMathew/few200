import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { reducers, featureName } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ListEffects } from './effects/list.effects';
import { EntryComponent } from './components/entry/entry.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BooksComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([ListEffects]),
    HttpClientModule
  ],
  exports: [BooksComponent]
})
export class BooksModule {}
