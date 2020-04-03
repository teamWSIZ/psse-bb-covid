import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GService {
  admin = false;
  pass = 'abra kadabra';
  data = 'https://api.wsi.edu.pl/covid';
  constructor() { }
}
