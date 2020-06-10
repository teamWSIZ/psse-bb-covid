import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../_model/post";
import {GService} from "../g.service";

declare var $: any;


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.less']
})
export class PostcardComponent implements OnInit {
  @Input()
  p : Post;
  @Input()
  header: string;
  @Input()
  height: number;
  @Input()
  showdate: boolean = true;

  constructor(public g:GService) { }

  ngOnInit() {
  }

  mod_id() {
    return 'mod' + this.p.id;
  }


  show_img() {
    $('#' + this.mod_id()).modal('show');
  }
}
