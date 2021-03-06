import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GService} from "../g.service";
import {HttpClient} from "@angular/common/http";
import {CaseData} from "../_model/case-data";
import {RegionNode} from "../_model/region-node";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit, OnDestroy {
  subnode_data: CaseData[];
  nodeid: number;
  node = RegionNode.dummy();
  gdate_changed_subscription: Subscription;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router,
              public g: GService) {
  }

  ngOnDestroy(): void {
    console.log('cancelling subscription');
    this.gdate_changed_subscription.unsubscribe();
  }


  ngOnInit() {
    this.gdate_changed_subscription = this.g.gdate_changed.subscribe(msg => {
      this.load_data(this.nodeid);
    });
    this.route.params.subscribe(params => {
      this.nodeid = parseInt(params['nodeid']);

      this.g.load_nodes().subscribe(nn => {
        this.node = this.g.nodes.get(this.nodeid);
        this.load_data(this.nodeid);
      });

    });

  }

  load_data(nodeid: number) {
    console.log(`loading daily data for all subregions of ${nodeid} for ${this.g.gdate}`);
    let url = this.g.data + `/nodes/${nodeid}/data?day=${this.g.gdate.toISOString()}`;
    this.http.get<CaseData[]>(url).subscribe(dd => {
      this.subnode_data = dd;
    });
  }

  navigate_to_region(nodeid: number) {
    if (nodeid === 0) return;
    if (this.g.nodes.get(nodeid).leaf) return;//dont navigate to leafs -- nothing to be seen there
    this.router.navigate(['/details', nodeid]);
  }

  navigate_timeline(nodeid: number) {
    this.router.navigate(['/stats', nodeid]);
  }

  set_ed_date(date: string) {
    this.g.gdate = new Date(date);
    this.g.gdate_changed.emit('changed');
  }

  is_yellow(nid: number, np7: number) {
    let n = this.g.nodes.get(nid);
    if (n.pop == 1) return false;
    let yellow = this.g.yellow(n);
    let red = this.g.red(n);
    // console.log(`yellow:${yellow}`)
    return np7 >= yellow && np7 < red;
  }

  is_red(nid: number, np7: number) {
    let n = this.g.nodes.get(nid);
    if (n.pop == 1) return false;
    let red = this.g.red(n);
    return np7 >= red;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // console.log(event.key);
    // console.log(event.ctrlKey);
    if (event.key === 'ArrowUp' && event.ctrlKey) {
      this.g.add_date(-1);
      this.navigate_to_region(this.node.pid);
    }
  }


  wheel(event: WheelEvent) {
    if (event.deltaY < -3) {
      this.navigate_to_region(this.node.pid);
    }
  }

  region_up_name(): string {
    return `do ${this.g.nodes.get(this.node.pid).name}`
  }
}
