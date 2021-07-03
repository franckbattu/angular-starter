import { NgModule } from "@angular/core";
import { MaterialModule } from './material.module';
import { RoutePipe } from "./routing/routing.pipe";

const modules = [
  MaterialModule
];

const pipes = [
  RoutePipe
]

@NgModule({
  declarations: [
    ...pipes,
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...pipes
  ]
})
export class CoreModule {}