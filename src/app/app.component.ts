import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ApiService } from "./api.service";
import { CovidReport } from "./model/CovidReport.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "covid-tracker";

  current: CovidReport;
  newCritical: string;
  newActive: string;
  newRecovered: number;
  newTests: number;
  currentYear = new Date().getFullYear();
  language = 'pt';

  constructor(private apiService: ApiService, private translationService: TranslateService, private spinner: NgxSpinnerService) {
    this.spinner.show();
    this.translationService.use(this.translationService.getDefaultLang());
    this.apiService.getCases().then((reports: CovidReport[]) => {
      console.log(reports);
      this.current = reports[0];
      this.newCritical = this.getSigned(this.current.critical - reports[1]?.critical);
      this.newActive = this.getSigned(this.current.active - reports[1]?.active);
      this.newRecovered = this.current.recovered - reports[1]?.recovered;
      this.newTests = this.current.tests - reports[1]?.tests;
      this.spinner.hide();
    });
  }

  private getSigned(number: number): string {
    return (number >= 0 ) ? "+" + number : number.toString();
  }

  public switchLanguage() {
    if (this.translationService.currentLang === 'en') {
      this.translationService.use('pt')
      this.language = 'pt';
    } else {
      this.translationService.use('en');
      this.language = 'en';
    }
  }

}
