import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [NgbModule, BrowserModule, HttpClientModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
