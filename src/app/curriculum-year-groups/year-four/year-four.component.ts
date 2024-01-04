import { Component } from '@angular/core';

@Component({
  selector: 'app-year-four',
  templateUrl: './year-four.component.html',
  styleUrls: ['./year-four.component.css'],
})
export class YearFourComponent {
  Open_Y4_Brocher_Spring() {
    // Open the PDF link in a new tab
    window.open(
      'https://drive.google.com/file/d/1MbKMAjDaJaM0HQtbKStjufT-iz6LJvyU/view?usp=sharing',
      '_blank'
    );
  }
}
