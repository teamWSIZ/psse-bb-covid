import { Component, OnInit } from '@angular/core';
import {GService} from '../g.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.less']
})
export class AdmComponent implements OnInit {
  pass: string;

  constructor(public g: GService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.g.admin = true;
    this.g.pass = this.pass;
    this.router.navigate(['stats']);
  }

  logout() {
    this.g.admin = false;
    this.g.pass = '';
    this.router.navigate(['stats']);
  }
}
