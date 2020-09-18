import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
require("dotenv").config();

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getCases() {
    return this.http
      .get(
        "https://covid-19-data.p.rapidapi.com/country/code?format=json&code=pt",
        {
          observe: "body",
          responseType: "json",
          headers: {
            "x-rapid-host": "covid-19-data.append.rapidapi.com",
            "x-rapidapi-key": process.env.RAPID_API_KEY,
          },
        }
      )
      .toPromise();
  }

  public getNews() {
    return this.http
      .get(
        "https://newsapi.org/v2/top-headlines?" +
          "q=covid" +
          "&pagesize=3" +
          "&country=pt",
        {
          observe: "body",
          responseType: "json",
          headers: { "X-Api-Key": "dc3b65c2307242b299efd1f6350e4cba" }, // this shouldn't be exposed but security isn't an issue in this case
        }
      )
      .toPromise();
  }
}
