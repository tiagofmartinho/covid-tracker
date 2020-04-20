import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  public getCases() {
    var day = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    var country = "portugal";
    return this.http
      .get(`${environment.apiUrl}/stats/history/${day}/${country}`,
        {
          observe: "body",
          responseType: "json",
        }
      )
      .toPromise();
  }
}
