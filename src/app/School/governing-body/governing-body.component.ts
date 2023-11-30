import { Component } from '@angular/core';

@Component({
  selector: 'app-governing-body',
  templateUrl: './governing-body.component.html',
  styleUrls: ['./governing-body.component.css'],
})
export class GoverningBodyComponent {
  governors = [
    {
      type: 'Local Authority Governor',
      name: ['Tahir Khan'],
      position: ['Full/Finance Personnel & Premises'],
    },
    {
      type: 'Headteacher',
      name: ['Alan Hodges'],
      position: ['All papers'],
    },

    {
      type: 'Parent Governors',
      name: ['TMrs Sobia Arif', 'Mr Abid Rakhman'],
      position: [
        'Full/Finance Personnel & Premises',
        'Full/Finance Personnel & Premises',
      ],
    },
    {
      type: 'Co-opted Governors',
      name: [
        'Mrs Shamim Hamida',
        'Mr Kaleem Shafi',
        'Ms Rona Campbell',
        'Mrs Karen Clark ',
        'Ms Debra Stanfield',
      ],
      position: [
        'Full/Achievement & Standards',
        'All Papers',
        'Full Governing Body',
        'Full/Achievement & Standards',
        'Full/Finance Personnel & Premises',
      ],
    },
    {
      type: 'School Governor',
      name: ['Mrs Maria Smith'],
      position: ['Fll/Achievement & Standards'],
    },
  ];
}
