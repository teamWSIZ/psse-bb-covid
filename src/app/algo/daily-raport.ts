//to jest tzw. klasa danych (dataclass)
export class DailyRaport {
  date: Date;
  suspected: number;  // == confirmed cases
  quarantine: number;
  monitored: number;

  //wygenerowany konstruktor (shift-shift generate)
  constructor(date: Date,
              suspected: number,
              quarantine: number,
              monitored: number) {
    this.date = date;
    this.suspected = suspected;
    this.quarantine = quarantine;
    this.monitored = monitored;
  }
}
