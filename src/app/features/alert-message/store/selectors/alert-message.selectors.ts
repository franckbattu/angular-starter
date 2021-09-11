import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { AlertMessageType } from "../../models/alert-message.model";
import { AlertMessageEntities, AlertMessageState, ALERT_MESSAGE_FEATURE, StateWithAlertMessage } from "../alert-message.state";

export const getAlertMessageState: MemoizedSelector<
  StateWithAlertMessage,
  AlertMessageState
> = createFeatureSelector<AlertMessageState>(ALERT_MESSAGE_FEATURE);

export const getAlertMessageEntities: MemoizedSelector<
  StateWithAlertMessage,
  AlertMessageEntities
> = createSelector(
  getAlertMessageState,
  state => state.entities
);

export const getGlobalMessageEntitiesByType = (
  type: AlertMessageType
): MemoizedSelector<StateWithAlertMessage, string[]> => {
  return createSelector(
    getAlertMessageEntities,
    (entities) => entities && entities[type]
  );
};

export const getAlertMessageCountByType = (
  type: AlertMessageType
): MemoizedSelector<StateWithAlertMessage, number> => {
  return createSelector(
    getGlobalMessageEntitiesByType(type),
    (entities) => entities && entities.length
  );
};