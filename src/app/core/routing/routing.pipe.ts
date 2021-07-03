import { Pipe, PipeTransform } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoute, UrlCommandRoute } from "./routing.model";

@Pipe({
  name: 'appRoute',
})
export class RoutePipe implements PipeTransform {

  constructor(
    private router: Router,
  ) {}

  transform(commands: UrlCommandRoute): string[] {
    const selectedRoute = (this.router.config as AppRoute[])
      .filter((route: AppRoute) => route.name === commands.route)[0];
    let path = selectedRoute.path;
    if (commands.params) {
      Object.keys(commands.params).forEach(param => {
        path = path?.replace(`:${param}`, commands.params?.param as string);
      });
    }
    return [`/${path}`];
  }
}
