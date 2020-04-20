import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { DatePipe, registerLocaleData } from "@angular/common";
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

@NgModule({
  declarations: [AppComponent],
  imports: [NgbModule, BrowserModule, HttpClientModule],
  providers: [DatePipe,   { provide: LOCALE_ID, useValue: 'pt-PT'},],
  bootstrap: [AppComponent],
})
export class AppModule {}
