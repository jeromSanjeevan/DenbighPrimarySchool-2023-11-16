import { Component } from '@angular/core';

@Component({
  selector: 'app-year-two',
  templateUrl: './year-two.component.html',
  styleUrls: ['./year-two.component.css'],
})
export class YearTwoComponent {
  Open_Y2_Brocher_Spring() {
    // Open the PDF link in a new tab
    window.open(
      'https://drive.google.com/file/d/1W5QAewwixYmPFdVr1RFpVNep2xZwUHmY/view',
      '_blank'
    );
  }
}
