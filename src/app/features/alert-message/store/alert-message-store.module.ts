import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ALERT_MESSAGE_FEATURE } from "./alert-message.state";
import { AlertMessageEffects } from "./effects";
import { reducerProvider, reducerToken } from "./reducers";

@NgModule({
  imports: [
    StoreModule.forFeature(ALERT_MESSAGE_FEATURE, reducerToken),
    EffectsModule.forFeature([AlertMessageEffects])
  ],
  providers: [
    reducerProvider,
  ],
})
export class AlertMessageStoreModule {}