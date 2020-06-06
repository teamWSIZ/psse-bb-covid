import {EventEmitter, Injectable} from '@angular/core';
import {RegionNode} from "./_model/region-node";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GService {
  admin = false;
  pass = 'abra kadabra';
  data = 'http://0.0.0.0:5206';

  gdate_changed = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  nodes: Map<number, RegionNode> = new Map();
  node_list: RegionNode[] = [];

  //globally-set date; start with yesterday
  gdate = new Date(new Date().setTime(new Date().getTime() - 86400000));


  load_nodes(): Observable<RegionNode[]> {
    //load only once per app
    if (this.nodes.size == 0) {
      console.log(`loading all nodes..`);
      let url = this.data + `/all_nodes`;
      return this.http.get<RegionNode[]>(url).pipe(
        tap(nn => {
          this.node_list = nn;
          console.log(`got ${nn.length} nodes`)
          nn.forEach(n => this.nodes.set(n.id, n));
        })
      );
    } else {
      return of(this.node_list);
    }
  }


  add_date(days: number) {
    //Add `days` to this.gdate
    console.log(`modifying date`);
    this.gdate = new Date(this.gdate.setTime(this.gdate.getTime() + days * 86400000));
    this.gdate_changed.emit('changed');
  }
}
