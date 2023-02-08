import { TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, NgForm],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should return 0 for hourRings and quaters`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.hourRings).toEqual(0);
    expect(app.quaters).toEqual(0);
  });

  it(`should return 1 for hourRings and 3 for quaters`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.churchClock({ value: { time: '13:45' } });
    expect(app.hourRings).toEqual(1);
    expect(app.quaters).toEqual(3);
  });

  it(`should return nothing for hourRings and quaters`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.churchClock({ value: { time: '25:60' } });
    expect(app.hourRings).toEqual(0);
    expect(app.quaters).toEqual(0);
  });

  it(`should return 9 and 3 for hourRings and quaters`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.churchClock({ value: { time: '21:59' } });
    expect(app.hourRings).toEqual(9);
    expect(app.quaters).toEqual(3);
  });

  it(`should return 0 and 0 for hoursRings and quaters if time is between 0 and 6 or 22 and 24`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.churchClock({ value: { time: '06:00' } });
    expect(app.hourRings).toEqual(0);
    expect(app.quaters).toEqual(0);

    app.churchClock({ value: { time: '00:00' } });
    expect(app.hourRings).toEqual(0);
    expect(app.quaters).toEqual(0);

    app.churchClock({ value: { time: '22:00' } });
    expect(app.hourRings).toEqual(0);
    expect(app.quaters).toEqual(0);

    app.churchClock({ value: { time: '24:00' } });
    expect(app.hourRings).toEqual(0);
    expect(app.quaters).toEqual(0);
  });
});
