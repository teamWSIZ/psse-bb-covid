import { Component, OnInit } from '@angular/core';
import {Post} from "../_model/post";
import {HttpClient} from "@angular/common/http";
import {GService} from "../g.service";

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.less']
})
export class SourcesComponent implements OnInit {

  sourceslines: Post[] = [];

  constructor(private http: HttpClient, private g: GService) { }

  ngOnInit() {
    let url = this.g.data + `/posts?catid=6`;
    this.http.get<Post[]>(url).subscribe(pp => {
      pp.sort((a, b) => a.title.localeCompare(b.title));
      this.sourceslines = pp;
    });
  }
}
