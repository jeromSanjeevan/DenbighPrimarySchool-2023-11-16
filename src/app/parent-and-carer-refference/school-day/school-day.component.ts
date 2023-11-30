import { Component } from '@angular/core';

@Component({
  selector: 'app-school-day',
  templateUrl: './school-day.component.html',
  styleUrls: ['./school-day.component.css'],
})
export class SchoolDayComponent {
  headerHeading: string = 'School Day';

  safeGuardingTeam = [
    {
      time: '08:00 - 08:35',
      day: 'Breakfast Club',
    },
    { time: '08:40', day: 'School gates open' },
    { time: '08:50', day: 'School gates close' },
    { time: '15:15', day: 'School gates open for pupil collection' },
    {
      time: '15:15 - 16:00 ',
      day: 'After-School Sports and Academic Clubs (termly booking required)',
    },
  ];
}
