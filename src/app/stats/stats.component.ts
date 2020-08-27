import {Component, OnInit} from '@angular/core';
import {DailyReport} from './daily-report';
import {GService} from '../g.service';
import {ActivatedRoute, Router} from "@angular/router";
import {RegionNode} from "../_model/region-node";
import {CaseData} from "../_model/case-data";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-algo',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.less']
})
export class StatsComponent implements OnInit {
  edited_report: DailyReport;  //editing?

  case_data: CaseData[];

  nodeid: number;
  node = RegionNode.dummy();

  labels = []
  darkblue = 'rgb(69,114,123)'
  datasets_np7 = [
    {
      data: [],
      label: 'Dzienna liczba zarażeń (krocząca średnia 7-dniowa)',
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      borderColor: this.darkblue,
      pointBorderColor: this.darkblue,
      pointBackgroundColor: this.darkblue,
      pointHoverBorderColor: this.darkblue
    }
  ]
  datasets_q7 = [
    {
      data: [],
      label: 'Dzienna liczba osób na kwarantannie (krocząca średnia 7-dniowa)',
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      borderColor: this.darkblue,
      pointBorderColor: this.darkblue,
      pointBackgroundColor: this.darkblue,
      pointHoverBorderColor: this.darkblue
    }
  ]
  chart_type = 'line';
  chart_options = {
    animation: {
      duration: 1
    },
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'day',
          unitStepSize: 1,
          displayFormats: {
            'millisecond': 'MM / DD',
            'second': 'MM / DD',
            'minute': 'MM / DD',
            'hour': 'MM / DD',
            'day': 'MM / DD',
            'week': 'MM / DD',
            'month': 'MM / DD',
            'quarter': 'MM / DD',
            'year': 'MM / DD',
          }
        }
      }],
    },
  }
  private yellow: number;
  private red: number;
  private has_pop = false;


  private data_into_plots() {
    let dates = [];
    let vals_np7 = [];
    let vals_q7 = [];
    this.case_data.forEach(d => {
      dates.push(d.data);
      vals_np7.push(d.np7);
      vals_q7.push(d.q7);
    });
    vals_np7.reverse();
    vals_q7.reverse();
    dates.reverse();
    this.datasets_np7[0].data = vals_np7;
    this.labels = dates;
    this.datasets_q7[0].data = vals_q7;
    this.labels = dates;
  }

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router,
              public g: GService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`node: ${params['nodeid']}`);
      this.nodeid = parseInt(params['nodeid']);
      console.log(`calling for timeline of node ${this.nodeid}`);

      this.g.load_nodes().subscribe(nn => {
        this.node = this.g.nodes.get(this.nodeid);
        this.load_timeline_data(this.nodeid);
        this.has_pop = (this.node.pop>1);
        this.yellow = this.g.yellow(this.node);
        this.red = this.g.red(this.node);
      });
    })

    this.clear_edited_report();

  }

  is_yellow(n7 :number) {
    if (!this.has_pop) return false;
    return n7 >= this.yellow && n7 < this.red;
  }

  is_red(n7 :number) {
    if (!this.has_pop) return false;
    return n7 >= this.red;
  }



  clear_edited_report() {
    this.edited_report = new DailyReport(new Date(), 0, 0, 0);
  }


  private load_timeline_data(nodeid: number) {
    console.log(`loading timeline for node ${nodeid}`);
    let url = this.g.data + `/timeline/${nodeid}`;
    this.http.get<CaseData[]>(url).subscribe(dd => {
      this.case_data = dd;
      this.data_into_plots();
    });
  }

  save_new_report() {
  }


  navigate_to_region(nodeid: number) {
    this.router.navigate(['/details', nodeid]);
  }


}
