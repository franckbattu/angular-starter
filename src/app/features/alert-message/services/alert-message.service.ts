import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AlertMessageFacade } from "../facades/alert-message.facade";
import { AlertMessageType } from "../models/alert-message.model";
import { AlertMessageActions } from "../store/actions";
import { AlertMessageEntities, StateWithAlertMessage } from "../store/alert-message.state";
import { AlertMessageSelectors } from "../store/selectors";
import { filter } from 'rxjs/operators';

@Injectable()
export class AlertMessageService implements AlertMessageFacade {

  constructor(
    private store: Store<StateWithAlertMessage>,
  ) {}

  get(): Observable<AlertMessageEntities> {
    return this.store.pipe(
      select(AlertMessageSelectors.getAlertMessageEntities),
      filter(messages => typeof messages !== undefined)
    )
  }

  add(text: string, type: AlertMessageType, timeout?: number): void {
    this.store.dispatch(
      AlertMessageActions.addMessage({ payload: { 
        alertMessage: {
          text,
          type,
          timeout,
        },
      }}),
    )
  }
}