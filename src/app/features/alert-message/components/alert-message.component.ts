import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AlertMessageFacade } from "../facades/alert-message.facade";
import { AlertMessageType } from "../models/alert-message.model";
import { AlertMessageEntities } from "../store/alert-message.state";

@Component({
  selector: 'alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {

  messages$: Observable<AlertMessageEntities>;
  messageType: typeof AlertMessageType = AlertMessageType;

  constructor(
    private alertMessageFacade: AlertMessageFacade
  ) {}

  ngOnInit(): void {
    this.messages$ = this.alertMessageFacade.get();
  }
}
