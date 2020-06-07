import { Component, OnInit } from '@angular/core';
import {Post} from "../_model/post";
import {HttpClient} from "@angular/common/http";
import {GService} from "../g.service";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.less']
})
export class MapsComponent implements OnInit {

  q7_posts: Post[] = [];
  np_posts: Post[] = [];
  np7_posts: Post[] = [];

  constructor(private http: HttpClient, public g: GService) { }

  ngOnInit() {
    let url = this.g.data + `/posts?catid=2`;
    this.http.get<Post[]>(url).subscribe(pp => {
      this.np7_posts = pp;
    });
    url = this.g.data + `/posts?catid=3`;
    this.http.get<Post[]>(url).subscribe(pp => {
      this.q7_posts = pp;
    });
    url = this.g.data + `/posts?catid=4`;
    this.http.get<Post[]>(url).subscribe(pp => {
      this.np_posts = pp;
    });
  }

}
