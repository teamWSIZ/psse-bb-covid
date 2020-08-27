import {EventEmitter, Injectable} from '@angular/core';
import {RegionNode} from "./_model/region-node";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";
import {CaseData} from "./_model/case-data";

@Injectable({
  providedIn: 'root'
})
export class GService {
  admin = false;
  pass = 'abra kadabra';
  // data = 'http://0.0.0.0:6206';
  data = 'https://covid.wsi.edu.pl/api'

  gdate_changed = new EventEmitter();


  nodes: Map<number, RegionNode> = new Map();
  node_list: RegionNode[] = [];

  //globally-set date; start with yesterday
  gdate: Date;
  max_date: Date;

  constructor(private http: HttpClient) {
    // console.log('cstr');
    // let today = new Date();
    // if (today.getHours() < 20) {
    //   this.gdate = new Date(new Date().setTime(new Date().getTime() - 86400000)); //yesterday
    // } else {
    //   this.gdate = today;
    // }
    console.log(`data:${this.data}`);
    const url = `${this.data}/timeline/1`;
    http.get<CaseData[]>(url).subscribe(cc => {
      if (cc.length === 0) this.gdate = new Date();
      else this.gdate = new Date(cc[0].data);
      this.max_date = this.gdate;
    });
  }


  load_nodes(): Observable<RegionNode[]> {
    //load only once per app
    if (this.nodes.size == 0) {
      let url = this.data + `/all_nodes`;
      return this.http.get<RegionNode[]>(url).pipe(
        tap(nn => {
          this.node_list = nn;
          nn.forEach(n => this.nodes.set(n.id, n));
        })
      );
    } else {
      return of(this.node_list);
    }
  }


  add_date(days: number) {
    //Add `days` to this.gdate
    if (this.gdate.getTime() > this.max_date.getTime() && days > 0) return;  //not beyond now
    if (this.gdate <= new Date('2020-06-01') && days < 0) return; //no data earlier
    this.gdate = new Date(this.gdate.setTime(this.gdate.getTime() + days * 86400000));
    this.gdate_changed.emit('changed');
  }

  thumbnail(url: string): string {
    //compute thumbnail location for given global map location; essentially filename = "sm_{map_filename}"
    let at = url.indexOf('covid');
    let host = url.substr(0, at);
    let map = url.substr(at);
    return `${host}sm_${map}`;
  }

  xsthumbnail(url: string): string {
    //compute thumbnail location for given global map location; essentially filename = "sm_{map_filename}"
    let at = url.indexOf('covid');
    let host = url.substr(0, at);
    let map = url.substr(at);
    return `${host}xs_${map}`;
  }

  yellow(node: RegionNode) {
    return Math.round(4.29 * node.pop / 100);
  }

  red(node: RegionNode) {
    return Math.round(8.57 * node.pop / 100);
  }

}
