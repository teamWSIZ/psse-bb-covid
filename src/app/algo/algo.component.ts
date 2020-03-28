import {Component, OnInit} from '@angular/core';
import {DailyRaport} from "./daily-raport";


@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.less']
})
export class AlgoComponent implements OnInit {
  //algo1
  wynik: string = '---n/a---';
  tab_reversed = []; //pole klasy ...
  visible_sum = 0;
  //algo2
  napis = '1,3,5';
  tab_from_string: number[] = [];
  less_than_ten = 0;
  more_than_twenty = 0;
  shape_possible = false;
  tab_good_numbers: number[] = [];

  raport: DailyRaport;  //to będzie raport do celów testowych
  bb_raports: DailyRaport[] = [];

  constructor() {
  }

  ngOnInit() {
    this.raport = new DailyRaport(new Date(), 10, 674, 1520);

    this.bb_raports.push(new DailyRaport(new Date('2020-03-24'), 12, 575, 1398))
    this.bb_raports.push(new DailyRaport(new Date('2020-03-25'), 10, 659, 1616))
    this.bb_raports.push(new DailyRaport(new Date('2020-03-26'), 7, 651, 1694))
    this.bb_raports.push(new DailyRaport(new Date('2020-03-27'), 10, 674, 1520))
  }


  analyze() {
    let elements = this.napis.split(',');
    // this.tab_from_string = elements;
    this.tab_from_string = [];
    // this.tab_from_string.push(11);
    // console.log(this.tab_from_string);
    //
    let suma = 0;
    for(let v of elements) {
      suma = suma + parseInt(v);
      /// coś z parseInt(v)
      /// tak by zapełnić tablicę this.tab_from_string
      this.tab_from_string.push(parseInt(v));
    }
    //tutaj mamy już tablicę liczb wewnątrz this.tab_from_string
    console.log(suma);
    this.less_than_ten = 0;
    this.more_than_twenty = 0;
    for(let x of this.tab_from_string) {
      if (x<10) {
        this.less_than_ten += 1;
      }
      if (x>20) {
        this.more_than_twenty += 1;
      }
    }

    /*
    1,3,5,5,2,1,7,7,7

    #
    ###
    #####
    #####
    ##
    #
    #######
    #######
    #######

    Do wykonania podstawki potrzeba kawałka 3x3

    //zmienić by szukało kształtu długości 3 linii, ale każda ma mieć >=5
     */
    let good_lines = 0;
    let possible = false; //zmienna typu boolean (true/false)   ; 5,5,2,5,5
    for(let x of this.tab_from_string) {
      if (x>=5) {
        good_lines += 1;
        if (good_lines>=3) {
          possible = true;
        }
      } else {
        good_lines = 0;
      }
    }
    this.shape_possible = possible;

    /*
      Zadanie:
      - wypisać liczby >=10 i <=20;
      - i.s.: stworzyć tablicę more_less, do której dodawać tylko te liczby które spełniają
      warunek "x >=10 && x <= 20"

     */
    this.tab_good_numbers = [];
    for(let nn of this.tab_from_string) {
      if (nn>=10 && nn<=20) {
        this.tab_good_numbers.push(nn);
      }
    }

    // this.tab_good_numbers = [];
    // for(let i=0; i<this.tab_from_string.length; i+=1) {    //typ pętli chodzący po "indeksach tablicy"
    //   let nn = this.tab_from_string[i];
    //   if (nn>=10 && nn<=20) {
    //     this.tab_good_numbers.push(nn);
    //   }
    // }



  }

  check() {
    let x = 0;  //zmienna lokalna, typu "number"
    let y = 12;
    let z = 99;
    x = x + 3;
    z = x + y;

    let t = [5, 6, 7, 8, 9, 12];  //to jest tablica liczb (number)
    let rt = []; //to będzie odwrócona tablica t... 12, 9, 8 ... 5
    rt.unshift(5);
    rt.unshift(2);  // dodaje liczbę "2" na początek tablicy "rt", -> [2,5]

    rt = [];  //znowu mamy pustą tablicę....

    //algo do sprawdzenia czy liczby w "t" rosną:
    let previous = -1000;
    let suma = 0;

    for(let v of t) {
      rt.unshift(v);
      let zz = 12;
      zz += 3;
      console.log(`sprawdzam liczbę ${v}`);
      suma = suma + v;
      if (v > previous) {
        zz += 3;
        console.log(`liczba jest OK`);
        previous = v;
      } else {
        console.log(`uwaga: liczba ${v} nie jest większa niż ${previous}`);
        this.wynik = 'liczby nie rosną!!';
        return;
      }
    }
    console.log(`koniec sprawdzania; suma=${suma}`)
    this.wynik = 'liczby rosną';
    this.tab_reversed = rt;
    this.visible_sum = suma;
  }

  abra_kadabra() {
    this.wynik = 'abc';

  }


  show_raport(raport: DailyRaport): string {
    return JSON.stringify(raport);
  }

  new_report() {
    this.raport = new DailyRaport(new Date(), 0, 0, 0);
  }

  save_new_report() {
    this.bb_raports.push(this.raport);
  }
}
