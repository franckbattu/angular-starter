import { Component } from '@angular/core';
import { AlertMessageFacade } from '@app/alert-message/facades';
import { AlertMessageType } from '@app/alert-message/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent { 

  constructor(
    private alertMessageService: AlertMessageFacade,
  ) {}

  sendMessage(): void {
    this.alertMessageService.add(
      'Salut',
      AlertMessageType.MSG_TYPE_CONFIRMATION,
    );
  }
}