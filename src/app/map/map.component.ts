import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {GService} from "../g.service";
import {Post} from "../_model/post";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  post = Post.dummy();

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router,
              public g: GService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let postid = parseInt(params['postid']);
      let url = `${this.g.data}/posts/${postid}`;
      this.http.get<Post>(url).subscribe(p => {
        this.post = p;
      });
    });

  }

}
