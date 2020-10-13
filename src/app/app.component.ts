import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "covid-tracker";

  current: any;
  newCritical: any;
  newActive: any;

  constructor(private apiService: ApiService) {
    this.apiService.getCases().then((data: any) => {
      console.log(data);
      this.current = data.response[0];
    });
  }
}
