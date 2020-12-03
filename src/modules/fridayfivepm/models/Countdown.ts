export interface CountdownProperties {
  readonly seconds: number;
  readonly minutes: number;
  readonly hours: number;
}

export class Countdown implements CountdownProperties {
  readonly seconds;
  readonly minutes;
  readonly hours;

  constructor(init?: CountdownProperties) {
    this.seconds = init?.seconds || 0;
    this.minutes = init?.minutes || 0;
    this.hours = init?.hours || 0;
  }

  public tick(): Countdown {
    const date = new Date();
    const resultDate = new Date(date.getTime());
    resultDate.setDate(date.getDate() + ((7 + 5 - date.getDay()) % 7));
    resultDate.setHours(17);
    resultDate.setMinutes(0);

    const diff = resultDate.getTime() - Date.now() - 1000;
    return new Countdown({
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: 60 - new Date().getSeconds(),
    });
  }
}
