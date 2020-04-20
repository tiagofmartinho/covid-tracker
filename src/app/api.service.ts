import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public getCases() {
    return this.http.get('https://covid-19-data.p.rapidapi.com/country/code?format=json&code=pt', {
      observe: 'body',
      responseType: 'json',
      headers: {'x-rapid-host': 'covid-19-data.append.rapidapi.com',
      'x-rapidapi-key': '786e7fb420msh598b079080031acp1aa33fjsna43b5092e70a'
    }
    }).toPromise();
  }

  public getNews() {
    return this.http.get('http://newsapi.org/v2/top-headlines?' +
    'q=covid' +
    '&pagesize=3' +
    '&country=pt', {
      observe: 'body',
      responseType: 'json',
      headers: {'X-Api-Key': 'dc3b65c2307242b299efd1f6350e4cba'}
    }).toPromise();
  }
}
