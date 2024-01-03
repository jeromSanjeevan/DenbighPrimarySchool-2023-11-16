import { Component } from '@angular/core';
import { colSectionAnimations } from 'src/app/animations/col-section-animations';

@Component({
  selector: 'app-year-one',
  templateUrl: './year-one.component.html',
  styleUrls: ['./year-one.component.css'],
  animations: colSectionAnimations, // Use the animations from the separate file
})
export class YearOneComponent {
  isSectionOpenEnglish = true; // Add a variable to track the section state
  isSectionOpenMath = true;

  toggleRowVisibilityEnglish(): void {
    this.isSectionOpenEnglish = !this.isSectionOpenEnglish;
  }

  toggleRowVisibilityMaths(): void {
    this.isSectionOpenMath = !this.isSectionOpenMath;
  }
}
