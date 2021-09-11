import { NgModule } from "@angular/core";
import { AlertMessageModule } from "./alert-message/alert-message.module";
import { HomeModule } from "./home/home.module";

@NgModule({
  imports: [
    HomeModule,
    AlertMessageModule
  ],
  exports: [
    AlertMessageModule
  ]
})
export class FeaturesModule {}