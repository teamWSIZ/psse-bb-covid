import { Component, OnInit } from '@angular/core';
import {GService} from '../g.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor(public g: GService) { }

  ngOnInit() {
  }

}
