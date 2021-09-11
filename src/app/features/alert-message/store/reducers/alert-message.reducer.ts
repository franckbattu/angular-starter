import { createReducer, on } from "@ngrx/store";
import { AlertMessage, AlertMessageType } from "../../models/alert-message.model";
import { AlertMessageActions } from "../actions";
import { AlertMessageState } from "../alert-message.state";

export const initialState: AlertMessageState = {
  entities: {},
};

const reduceAddMessage = (state: AlertMessageState, payload: { alertMessage: AlertMessage }) => {
  const { alertMessage } = payload;
  if (state.entities[alertMessage.type] === undefined) {
    return {
      ...state,
      entities: {
        ...state.entities,
        [alertMessage.type]: [alertMessage.text],
      },
    }
  }
  else {
    const currentMessages = state.entities[alertMessage.type];
    return {
      ...state,
      entities: {
        ...state.entities,
        [alertMessage.type]: [...currentMessages, alertMessage.text],
      },
    }
  }
}

const reduceRemoveMessage = (state: AlertMessageState, payload: { type: AlertMessageType; index: number; }) => {
  const msgType = payload.type;
  const msgIndex = payload.index;
  if (
    Object.keys(state.entities).length === 0 ||
    !state.entities[msgType]
  ) {
    return state;
  }

  const messages = [...state.entities[msgType]];
  messages.splice(msgIndex, 1);

  return {
    ...state,
    entities: {
      ...state.entities,
      [msgType]: messages,
    },
  };

}

export const reducer = createReducer(
  initialState,
  on(AlertMessageActions.addMessage, (state, { payload }) => reduceAddMessage(state, payload)),
  on(AlertMessageActions.removeMessage, (state, { payload }) => reduceRemoveMessage(state, payload)),
);
