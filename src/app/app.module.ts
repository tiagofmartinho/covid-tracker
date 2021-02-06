import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { DatePipe, registerLocaleData } from "@angular/common";
import localePT from '@angular/common/locales/pt';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NgxSpinnerModule } from "ngx-spinner";
registerLocaleData(localePT);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [NgbModule, BrowserModule, HttpClientModule, NgxSpinnerModule, TranslateModule.forRoot({
    defaultLanguage: 'pt',
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })],
  providers: [DatePipe,   { provide: LOCALE_ID, useValue: 'pt-PT'},],
  bootstrap: [AppComponent],
})
export class AppModule {}
