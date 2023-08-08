import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.css'],
})
export class MyCalendarComponent {
  // Const values
  currentDate: Date = new Date();
  currentDay = this.currentDate.getDate();
  currentMonth = this.currentDate.getMonth();

  // Changing values
  days: (number | null)[] = [];
  date: Date = new Date();
  month = this.date.getMonth();

  ngOnInit() {
    this.initializeDays();
  }

  initializeDays() {
    const date = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    const firstDayOfWeek = date.getDay();

    const emptyCells = (firstDayOfWeek + 6) % 7;

    for (let i = 0; i < emptyCells; i++) {
      this.days.push(null);
    }

    const lastDay = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    );

    for (let i = 0; i < lastDay.getDate(); i++) {
      this.days.push(i + 1);
    }
    console.log(this.month);
    console.log(this.currentMonth);
  }

  handleChangeMonth(value: 0 | 1) {
    const newDate = new Date(
      this.date.getFullYear(),
      value === 0 ? this.date.getMonth() - 1 : this.date.getMonth() + 1,
      1
    );
    this.date = newDate;
    this.month = newDate.getMonth();
    this.days = [];
    this.initializeDays();
  }

  handleClick(value: number | null) {
    console.log(value);
  }
}
