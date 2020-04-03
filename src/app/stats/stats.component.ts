import {Component, OnInit} from '@angular/core';
import {DailyReport} from './daily-report';
import {GService} from '../g.service';


@Component({
  selector: 'app-algo',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.less']
})
export class StatsComponent implements OnInit {

  edited_report: DailyReport;  //to będzie raport do celów testowych
  reverse_dates = false;
  bbReports: DailyReport[] = [];
  zyReports: DailyReport[] = [];

  constructor(public g: GService) {
  }

  ngOnInit() {
    this.bbReports.push(new DailyReport(new Date('2020-03-24'), 12, 575, 1398));
    this.bbReports.push(new DailyReport(new Date('2020-03-25'), 10, 659, 1616));
    this.bbReports.push(new DailyReport(new Date('2020-03-26'), 7, 651, 1694));
    this.bbReports.push(new DailyReport(new Date('2020-03-27'), 10, 674, 1520));
    this.bbReports.push(new DailyReport(new Date('2020-03-28'), 11, 678, 1596));
    this.bbReports.push(new DailyReport(new Date('2020-03-29'), 11, 669, 1541));
    this.bbReports.push(new DailyReport(new Date('2020-03-30'), 12, 650, 1555));
    this.bbReports.push(new DailyReport(new Date('2020-03-31'), 8, 594, 1562));
    this.bbReports.push(new DailyReport(new Date('2020-04-01'), 10, 561, 1607));
    this.bbReports.push(new DailyReport(new Date('2020-04-02'), 7, 566, 1697));

    this.sort_reports();

    this.zyReports.push(new DailyReport(new Date('2020-03-27'), 0, 129, 445));
    this.clear_edited_report();
  }


  clear_edited_report() {
    this.edited_report = new DailyReport(new Date(), 0, 0, 0);
  }

  save_new_report() {
    this.bbReports.push(this.edited_report);
    this.clear_edited_report();
  }

  sort_reports() {
    this.bbReports.sort((a, b) => a.date.getTime() - b.date.getTime());
    if (this.reverse_dates) {
      this.bbReports.reverse();
    }
  }
}
