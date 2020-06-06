import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GService} from "../g.service";
import {CaseData} from "../_model/case-data";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.less']
})
export class HealthComponent implements OnInit {
  case_datas: CaseData[];

  constructor(private http: HttpClient, private g: GService) {
  }

  ngOnInit() {
    this.load_data(1);
  }

  load_data(nodeid: number) {
    let url = this.g.data + `/nodes/${nodeid}/data`;
    this.http.get<CaseData[]>(url).subscribe(dd => {
      this.case_datas = dd;
    })
  }

}
