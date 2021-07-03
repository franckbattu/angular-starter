import { Route } from '@angular/router';

export interface AppRoute extends Route {
  name: string;
}

export interface UrlCommandRoute {
  route: string;
  params?: Record<string, any>;
}