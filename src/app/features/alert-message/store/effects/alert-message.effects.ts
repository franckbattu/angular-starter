import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import { concatMap, delay, filter, map, switchMap, take } from "rxjs/operators";
import { AlertMessage } from "../../models/alert-message.model";
import { AlertMessageActions } from "../actions";
import { StateWithAlertMessage } from "../alert-message.state";
import { AlertMessageSelectors } from "../selectors";

@Injectable()
export class AlertMessageEffects {

  readonly DEFAULT_TIMEOUT = 10000;

  constructor(
    private actions$: Actions,
    private store: Store<StateWithAlertMessage>
  ) {}

  hideAfterTimeout$ = createEffect(() => this.actions$.pipe(
    ofType(AlertMessageActions.addMessage),
    map(action => action.payload.alertMessage),
    concatMap((message: AlertMessage) => {
      return this.store.pipe(
        select(AlertMessageSelectors.getAlertMessageCountByType(message.type)),
        take(1),
        filter((count: number) => count !== undefined && count > 0),
        delay(message.timeout || this.DEFAULT_TIMEOUT),
        switchMap(() => {
          return of(AlertMessageActions.removeMessage({ payload: { type: message.type, index: 0 } }));
        })
      )
    })
  ));
}
