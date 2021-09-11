import { createAction, props, union } from "@ngrx/store";
import { AlertMessage, AlertMessageType } from "../../models/alert-message.model";

export const ADD_MESSAGE = '[Alert-message] Add Message';
export const REMOVE_MESSAGE = '[Alert-message] Remove Message';

export const addMessage = createAction(
  ADD_MESSAGE,
  props<{ payload: { alertMessage: AlertMessage } }>(),
);

export const removeMessage = createAction(
  REMOVE_MESSAGE,
  props<{ payload: { type: AlertMessageType; index: number; } }>(),
)

export const actions = union({
  addMessage,
  removeMessage,
});

export type AlertMessageAction = typeof actions;