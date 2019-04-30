import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotComponent } from './hot/hot.component';
import { TopicComponent } from './topic/topic.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/hot', pathMatch: 'full' },
  { path: 'hot', component: HotComponent },
  { path: 'topic', component: TopicComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
