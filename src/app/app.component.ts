import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'covid-tracker';

  stats;

  constructor(private apiService: ApiService){
     this.apiService.getRequest().then((data => {
      this.stats = data[0];
      console.log(this.stats);
    }));
  }

}
