export interface Time {
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
}

export class Countdown {
  readonly end;
  readonly diff;

  constructor(end: Date, start: Date = new Date()) {
    this.end = end;
    this.diff = this.end.getTime() - start.getTime();
  }

  public static tgif(): Countdown {
    const end = new Date();
    end.setDate(end.getDate() + ((7 + 5 - end.getDay()) % 7));
    end.setHours(17);
    end.setMinutes(0);
    end.setSeconds(0);

    return new Countdown(end);
  }

  get time(): Time {
    return {
      hours: Math.floor(this.diff / 1000 / 60 / 60),
      minutes: Math.floor((this.diff / 1000 / 60) % 60),
      seconds: Math.floor((this.diff / 1000) % 60),
    };
  }
}
