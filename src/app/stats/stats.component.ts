import {Component, OnInit} from '@angular/core';
import {DailyReport} from './daily-report';


@Component({
  selector: 'app-algo',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.less']
})
export class StatsComponent implements OnInit {

  raport: DailyReport;  //to będzie raport do celów testowych
  reverse_dates = false;
  bb_reports: DailyReport[] = [];
  zy_reports: DailyReport[] = [];

  constructor() {
  }

  ngOnInit() {
    this.raport = new DailyReport(new Date(), 10, 674, 1520);

    this.bb_reports.push(new DailyReport(new Date('2020-03-24'), 12, 575, 1398));
    this.bb_reports.push(new DailyReport(new Date('2020-03-25'), 10, 659, 1616));
    this.bb_reports.push(new DailyReport(new Date('2020-03-26'), 7, 651, 1694));
    this.bb_reports.push(new DailyReport(new Date('2020-03-27'), 10, 674, 1520));
    this.bb_reports.push(new DailyReport(new Date('2020-03-28'), 11, 678, 1596));
    this.bb_reports.push(new DailyReport(new Date('2020-03-29'), 11, 669, 1541));

    this.sort_reports();

    this.zy_reports.push(new DailyReport(new Date('2020-03-27'), 0, 129, 445));
  }


  new_report() {
    this.raport = new DailyReport(new Date(), 0, 0, 0);
  }

  save_new_report() {
    this.bb_reports.push(this.raport);
  }

  sort_reports() {
    this.bb_reports.sort((a, b) => a.date.getTime() - b.date.getTime());
    if (this.reverse_dates) {
      this.bb_reports.reverse();
    }
  }
}
