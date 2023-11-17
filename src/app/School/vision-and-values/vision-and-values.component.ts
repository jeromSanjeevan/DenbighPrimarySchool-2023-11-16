import { Component } from '@angular/core';

@Component({
  selector: 'app-vision-and-values',
  templateUrl: './vision-and-values.component.html',
  styleUrls: ['./vision-and-values.component.css'],
})
export class VisionAndValuesComponent {
  headerHeading: string = 'School Vision and Values';

  visions: string = '../../../assets/Visions/Vision.png';
}
