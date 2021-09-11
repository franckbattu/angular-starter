import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AlertMessageType } from "../models/alert-message.model";
import { AlertMessageEntities } from "../store/alert-message.state";

@Injectable({
  providedIn: 'root',
})
export abstract class AlertMessageFacade {

  /**
   * Get all alert messages
   */
  abstract get(): Observable<AlertMessageEntities>;

  /**
   * Add one alert message into store
   * @param text The message text
   * @param type The message type
   * @param timeout Duration of the message
   */
  abstract add(text: string, type: AlertMessageType, timeout?: number): void;
}