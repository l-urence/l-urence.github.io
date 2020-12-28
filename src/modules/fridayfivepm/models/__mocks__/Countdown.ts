import {Time} from '../Countdown';

export class Countdown {
  public static tgif() {
    return new Countdown();
  }

  get time(): Time {
    return {
      hours: 5,
      minutes: 2,
      seconds: 3,
    };
  }
}
