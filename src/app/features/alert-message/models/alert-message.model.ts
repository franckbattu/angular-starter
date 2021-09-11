export enum AlertMessageType {
  MSG_TYPE_CONFIRMATION = '[AlertMessage] Confirmation',
  MSG_TYPE_ERROR = '[AlertMessage] Error',
  MSG_TYPE_INFO = '[AlertMessage] Information',
  MSG_TYPE_WARNING = '[AlertMessage] Warning',
}

export interface AlertMessage {
  text: string;
  type: AlertMessageType;
  timeout?: number;
}
