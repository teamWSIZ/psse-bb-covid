import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.less']
})
export class FormsComponent implements OnInit {
  user: string;
  age: string;
  ageint = 0;
  lucky_numbers: string;
  wynik: number;
  pass: string;


  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    this.ageint = parseInt(this.age);
  }

  //Ma policzyć sumę liczb, zapisanych z przecinkami w zmiennej this.lucky_numbers


  compute_sum() {
    let tablica = this.lucky_numbers.split(',');
    console.log(`Numbers: ${JSON.stringify(tablica)}`);
    this.wynik = parseInt(tablica[0]) + parseInt(tablica[1]) + parseInt(tablica[2]);

    ///tablice w js:
    let tabl = [1, 2, 3];   //tablica int-ów
    tabl.push(12);  //teraz tablica ma 4 elementy, 0 ... 3
    let len = tabl.length;  //len = 4
    tabl[0] = 111;  //ustawienie wartości tabl[0]
    let x = tabl[0] * 2; //odczyt wartości z tablicy; teraz x = 222

    //todo: zadanie: policzyć sumę kwadratów tych liczb

  }

}
