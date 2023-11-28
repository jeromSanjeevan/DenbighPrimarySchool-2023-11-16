import { Component } from '@angular/core';

@Component({
  selector: 'app-safeguarding-at-denbigh',
  templateUrl: './safeguarding-at-denbigh.component.html',
  styleUrls: ['./safeguarding-at-denbigh.component.css'],
})
export class SafeguardingAtDenbighComponent {
  headerHeading: string = 'Safeguarding at Denbigh';

  safeGuardingTeam = [
    {
      name: 'Natalie McKiernan',
      designation: 'Designated Safeguarding Lead (DSL)',
    },
    { name: 'Maria Smith', designation: 'Safeguarding' },
    { name: 'Lisa Morris', designation: 'Safeguarding' },
    { name: 'Debbie Stanfield', designation: 'Safeguarding' },
    {
      name: 'Kaleem Shafi ',
      designation: 'Safeguarding Link Governor',
    },
  ];
}
