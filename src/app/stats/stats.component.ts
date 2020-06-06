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
      });
    })

    this.clear_edited_report();

  }


  clear_edited_report() {
    this.edited_report = new DailyReport(new Date(), 0, 0, 0);
  }


  private load_timeline_data(nodeid: number) {
    console.log(`loading timeline for node ${nodeid}`);
    let url = this.g.data + `/timeline/${nodeid}`;
    this.http.get<CaseData[]>(url).subscribe(dd => {
      this.case_data = dd;
    });
  }

  save_new_report() {
  }


  navigate_to_region(nodeid: number) {
    this.router.navigate(['/details', nodeid]);
  }
}
