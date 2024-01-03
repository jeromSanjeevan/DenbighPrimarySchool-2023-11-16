import { Component } from '@angular/core';

@Component({
  selector: 'app-school-lunch-menu',
  templateUrl: './school-lunch-menu.component.html',
  styleUrls: ['./school-lunch-menu.component.css'],
})
export class SchoolLunchMenuComponent {
  headerHeading: string = 'School Lunch Menu';

  openPdfInNewTab_Week_1() {
    // Open the PDF link in a new tab
    window.open(
      'https://drive.google.com/file/d/11rI7a5ydXiObcMRMF89uUnDS5bFJme6x/view?usp=drive_link',
      '_blank'
    );
  }

  openPdfInNewTab_Week_2() {
    // Open the PDF link in a new tab
    window.open(
      'https://drive.google.com/file/d/1ZEqB7GKIauEgOvz-Q1obLxWxUHPCwSTa/view?usp=drive_link',
      '_blank'
    );
  }
}
