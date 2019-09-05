import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { TodoComponent } from './features/todo/todo.component';
import { CounterComponent } from './components/counter/counter.component';
import { WatchlistComponent } from './features/watchlist/watchlist.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'watchlist',
    component: WatchlistComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
