import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoute } from './core/routing/routing.model';
import { HomeComponent } from './features/home/home.component';

const routes: AppRoute[] = [
  { path: '', component: HomeComponent, name: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }