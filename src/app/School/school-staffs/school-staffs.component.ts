import { Component } from '@angular/core';

@Component({
  selector: 'app-school-staffs',
  templateUrl: './school-staffs.component.html',
  styleUrls: ['./school-staffs.component.css'],
})
export class SchoolStaffsComponent {
  headerHeading: string = 'Denbigh Primary School Staff List 2023-24';
  slt: string = 'School Leadership and Management';
  yearLeads: string = 'Year Leaders';
  classTeacher: string = 'Class Teachers';

  SLT = [
    { name: 'Mr Alan Hodges', designation: 'Headteacher' },
    { name: 'Mrs Natalie McKiernan', designation: 'Deputy Headteacher' },
    { name: 'Mrs Maria Smith', designation: 'Assistant Headteacher & SENCO' },
    { name: 'Miss Lisa Morris', designation: 'Assistant Headteacher' },
    {
      name: 'Mrs Bernadette Dolan',
      designation: 'Business & Compliance Leader',
    },
  ];

  yearLeaders = [
    {
      name: 'Mrs Maria Smith',
      designation: 'EYFS Leader',
    },
    {
      name: 'Mrs Rebecca Beer',
      designation: ' Year 1 Leader',
    },
    {
      name: 'Miss Sarah Emerton',
      designation: 'Year 2 Leader',
    },
    {
      name: 'Mr Ahsan Ahmed',
      designation: 'Year 3 Leader',
    },
    {
      name: 'Mrs Claire Diggines',
      designation: 'Year 4 Leader',
    },
    {
      name: 'Mrs Amanda White',
      designation: 'Year 5 Leader',
    },
    {
      name: 'Miss Hannah Dolan',
      designation: 'Year 6 Leader',
    },
  ];

  classTeachers = [
    { name: 'Mrs Selina Begum', designation: 'EYFS Teacher' },
    { name: 'Mrs Gemma Turfrey', designation: 'EYFS Teacher' },
    { name: 'Mrs Nichola Sherry', designation: 'EYFS Teacher' },
    { name: 'Miss Katicia Blanchard', designation: 'Year 1 Teacher' },
    { name: 'Miss Marie-Claire Ward', designation: 'Year 1 Teacher' },
    { name: 'Mrs Nikki Ross', designation: 'Year 2 Teacher' },
    { name: 'Mr Cameron Davies', designation: 'Year 2 Teacher' },
    { name: 'Miss Ria Mildon', designation: 'Year 2 Teacher' },
    { name: 'Mr Ryan Darby', designation: 'Year 2 Graduate Teacher' },
    { name: 'Miss Shabnam Razaq', designation: 'Year 3 Teacher' },
    { name: 'Miss Victoria Spurgeon', designation: 'Year 3 Teacher' },
    { name: 'Mrs. Isabella Semeraro', designation: 'Year 4 Teacher' },
    { name: 'Mrs Shanel Keshopersad', designation: 'Year 4 Teacher' },
    { name: 'Miss Charlotte Cunnigham', designation: 'Year 5 Teacher' },
    { name: 'Miss Abby Ishaque', designation: 'Year 5 Teacher' },
    { name: 'Mr James Crockford', designation: 'Year 6 Teacher' },
    { name: 'Mrs Rebecca Goodman', designation: 'Year 6 Teacher' },
    { name: 'Mrs Ellie Jackson', designation: 'Art Specialist Teacher' },
    { name: 'Mrs Harriet Notman', designation: 'SEND Specialist Teacher' },
  ];
}
