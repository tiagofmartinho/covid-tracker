import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getRequest() {
    return this.http.get('https://covid-19-data.p.rapidapi.com/country/code?format=json&code=pt', {
      observe: 'body',
      responseType: 'json',
      headers: {'x-rapid-host': 'covid-19-data.append.rapidapi.com',
      'x-rapidapi-key': '786e7fb420msh598b079080031acp1aa33fjsna43b5092e70a'
    }
    }).toPromise();
  }
}
