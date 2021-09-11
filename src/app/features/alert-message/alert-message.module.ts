import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AlertMessageComponent } from "./components/alert-message.component";
import { AlertMessageFacade } from "./facades/alert-message.facade";
import { AlertMessageService } from "./services/alert-message.service";
import { AlertMessageStoreModule } from "./store/alert-message-store.module";

@NgModule({
  declarations: [
    AlertMessageComponent
  ],
  imports: [
    AlertMessageStoreModule,
    SharedModule,
  ],
  exports: [
    AlertMessageComponent,
  ],
  providers: [
    AlertMessageService,
    {
      provide: AlertMessageFacade,
      useExisting: AlertMessageService,
    },
  ],
})
export class AlertMessageModule {}