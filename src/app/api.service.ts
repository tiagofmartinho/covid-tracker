import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  public getCases() {
    return this.http
      .get(
        "https://covid-193.p.rapidapi.com/history?day=" +
          this.datePipe.transform(new Date(), "yyyy-MM-dd") +
          "&country=portugal",
        {
          observe: "body",
          responseType: "json",
          headers: {
            "x-rapid-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key":
              "786e7fb420msh598b079080031acp1aa33fjsna43b5092e70a",
          },
        }
      )
      .toPromise();
  }
}
