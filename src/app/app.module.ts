import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FeaturesModule } from './features/features.module';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

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
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FeaturesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'fr',
    }),
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
