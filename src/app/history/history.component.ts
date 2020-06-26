import { Component, OnInit } from '@angular/core';
import {Post} from "../_model/post";
import {HttpClient} from "@angular/common/http";
import {GService} from "../g.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {
  historylines: Post[] = [];

  constructor(private http: HttpClient, private g: GService) { }

  ngOnInit() {
    let url = this.g.data + `/posts?catid=5`;
    this.http.get<Post[]>(url).subscribe(pp => {
      this.historylines = pp;
    });
  }

}
