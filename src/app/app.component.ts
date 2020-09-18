import { Component, OnInit } from "@angular/core";
import { ConsoleReporter } from "jasmine";
import { ApiService } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "covid-tracker";

  news: object;
  current: object;
  before: object;

  newRecovered = "+";
  newCritical: any;
  newActive: any;

  constructor(private apiService: ApiService) {
    this.apiService.getCases().then((data) => {
      this.current = data.response[0];
      this.before = data.response[1];
      this.newRecovered +=
        this.current.cases.recovered - this.before.cases.recovered + "";
      this.newCritical =
        this.current.cases.critical - this.before.cases.critical;
      if (this.newCritical > 0) {
        this.newCritical = "+" + this.newCritical;
      }
      this.newActive = this.current.cases.active - this.before.cases.active;
      if (this.newActive > 0) {
        this.newActive = "+" + this.newActive;
      }
    });

    this.apiService.getNews().then((news) => {
      this.news = news;
    });
  }
}
