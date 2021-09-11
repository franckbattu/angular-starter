import { InjectionToken, Provider } from "@angular/core";
import { ActionReducer } from "@ngrx/store";
import { AlertMessageState } from "../alert-message.state";
import * as fromAlertMessage from './alert-message.reducer';

export function getReducers(): ActionReducer<AlertMessageState> {
  return fromAlertMessage.reducer;
}

export const reducerToken: InjectionToken<
  ActionReducer<AlertMessageState>
> = new InjectionToken<ActionReducer<AlertMessageState>>(
  'AlertMessageReducers',
);

export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
}