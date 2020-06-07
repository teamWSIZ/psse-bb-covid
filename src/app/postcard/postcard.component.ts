import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../_model/post";

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.less']
})
export class PostcardComponent implements OnInit {
  @Input()
  p : Post;

  constructor() { }

  ngOnInit() {
  }

}
