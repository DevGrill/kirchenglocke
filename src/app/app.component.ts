import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kirchenglocke';
  hourRings = 0;
  quaters = 0;
  time = false;

  constructor() {}

  ngOnInit() {}

  churchClock(timeInput: any) {
    const timeSliced = timeInput.value.time.split(':');
    const hourRings = timeSliced[0] % 12;
    const hoursIn24HourFormat = timeSliced[0];
    const quaters = Math.floor(timeSliced[1] / 15);
    this.time = true;
    if (quaters >= 4 || hourRings >= 25) {
      this.hourRings = 0;
      this.quaters = 0;
      return;
    }
    if (
      (hoursIn24HourFormat >= 0 && hoursIn24HourFormat <= 6) ||
      (hoursIn24HourFormat >= 22 && hoursIn24HourFormat <= 24)
    ) {
      this.hourRings = 0;
      this.quaters = 0;
      return;
    }

    this.hourRings = hourRings;
    this.quaters = quaters;
  }
}
