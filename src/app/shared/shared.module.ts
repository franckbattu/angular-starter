import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MaterialModule } from "./material.module";

const components = [
  NavbarComponent,
];

const modules = [
  CommonModule,
  TranslateModule,
  MaterialModule,
  RouterModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...components,
  ],
})
export class SharedModule {}