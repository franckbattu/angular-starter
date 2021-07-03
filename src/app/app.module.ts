import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'appId' }),
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RendererModule.forRoot(),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
