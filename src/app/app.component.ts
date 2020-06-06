import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {GService} from "./g.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private router: Router, private g: GService) {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // console.log(event.key);
    // console.log(event.ctrlKey);
    if (event.key === 'ArrowLeft' && event.ctrlKey) {
      this.g.add_date(-1);
    } else if (event.key === 'ArrowRight' && event.ctrlKey) {
      this.g.add_date(1);
    }
  }

}
