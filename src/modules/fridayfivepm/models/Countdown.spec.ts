import {Countdown} from './Countdown';

describe('Countdown', () => {
  it('should calculate the time till a given date', () => {
    const unixStart = Date.parse('06 Dec 2020 17:30:10 GMT');
    const unixEnd = Date.parse('7 Dec 2020 17:00:00 GMT');

    const countdown = new Countdown(new Date(unixEnd), new Date(unixStart));
    expect(countdown.time).toEqual({hours: 23, minutes: 29, seconds: 50});
  });
});
