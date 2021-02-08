import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { environment } from "src/environments/environment";
import { CovidReport } from "./model/CovidReport.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  public getCases(): Promise<CovidReport[]> {
    var day = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    var country = "portugal";
    var reports: CovidReport[] = [];
    return this.http
      .get(`${environment.apiUrl}/stats/history/${day}/${country}`, {
        observe: "body",
        responseType: "json",
      })
      .toPromise()
      .then((data: any) => {
        data.response.forEach((element) => {
          var report = new CovidReport(
            element.population,
            element.day,
            element.time,
            element.cases.new,
            element.cases.active,
            element.cases.critical,
            element.cases.recovered,
            element.cases.total,
            element.deaths.total,
            element.deaths.new,
            element.tests.total
          );
          reports.push(report);
        });
        return reports;
      });
  }
}
