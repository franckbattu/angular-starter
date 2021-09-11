export const ALERT_MESSAGE_FEATURE = 'alert-message';

export interface StateWithAlertMessage {
  [ALERT_MESSAGE_FEATURE]: AlertMessageState;
}

export interface AlertMessageState {
  entities: AlertMessageEntities;
}

export interface AlertMessageEntities {
  [messageType: string]: string[];
}