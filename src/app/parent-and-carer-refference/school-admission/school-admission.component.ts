import { Component } from '@angular/core';

@Component({
  selector: 'app-school-admission',
  templateUrl: './school-admission.component.html',
  styleUrls: ['./school-admission.component.css'],
})
export class SchoolAdmissionComponent {
  headerHeading: string = 'School Admission ARRANGEMENTS';

  admissionSteps = [
    'Contact the Admissions Team on 01582 546016.',
    'You will be asked to complete the relevant paperwork. Relevant documents you may be asked to bring along are; your child’s birth certificate, proof of address.',
    'The child is then put onto a waiting list. The Admissions Team will liaise with the school for available spaces.',
    'Priority is given to children living in the catchment area and/or if they have another sibling attending the school.',
    'The Admissions Team will inform parents in a letter when a space becomes available.',
    'The school will then be in touch to arrange for you and your child to visit the school.',
    'If you receive a letter from The Admissions Team stating that Denbigh Primary School is over-subscribed, then you will need to get back in touch with the Admissions Team and follow their appeals process.',
  ];

  
}
