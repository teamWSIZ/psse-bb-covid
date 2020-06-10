import {Component, OnInit} from '@angular/core';
import {CaseData} from "../_model/case-data";
import {RegionNode} from "../_model/region-node";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {GService} from "../g.service";
import {DailyReport} from "../stats/daily-report";
import {Post} from "../_model/post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  case_data: CaseData[];
  lastdata: CaseData;

  nodeid = 1;
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
  new_positives_map: Post;


  private data_into_plots() {
    let dates = [];
    let vals_np7 = [];
    let vals_q7 = [];
    this.lastdata = this.case_data[0];
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
    this.lastdata = new CaseData();
    this.new_positives_map = Post.dummy();

      this.g.load_nodes().subscribe(nn => {
        this.node = this.g.nodes.get(this.nodeid);
        this.load_timeline_data(this.nodeid);
      });
    let url = this.g.data + `/posts?catid=2`;
    this.http.get<Post[]>(url).subscribe(pp => {
      this.new_positives_map = pp[0];
    });
  }


  private load_timeline_data(nodeid: number) {
    let url = this.g.data + `/timeline/${nodeid}`;
    this.http.get<CaseData[]>(url).subscribe(dd => {
      this.case_data = dd;
      this.data_into_plots();
      //todo: update_main_date
    });
  }

  navigate_to_region() {
    this.router.navigate(['/details', 1]);
  }


}





















