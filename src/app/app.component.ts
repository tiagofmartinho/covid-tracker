import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'covid-tracker';

  current;
  stats;
  news;

  constructor(private apiService: ApiService){
     this.apiService.getCases().then((data => {
      this.stats = data[0];
      console.log(this.stats);
      this.current = this.stats.confirmed - this.stats.recovered - this.stats.deaths;
    }));
  }

}
