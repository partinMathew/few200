import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoModule } from './features/todo/todo.module';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    NavComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
