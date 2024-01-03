import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // Image URLs for Navbar
  navBarLogo: string = 'assets/denbigh_logo/den_logo.png';

  schoolSubMenus = [
    { label: 'Headteacher’s Welcome', url: 'school/head-teacher-welcome' },
    { label: 'School Vision and Values', url: 'home/vision-and-values' },
    { label: 'School Governance', url: 'school/school-governance' },
    { label: 'School Staff', url: 'home/school-staff' },
    { label: 'House System', url: '#' },
    { label: 'School Council', url: '#' },
    { label: 'School Development Plan', url: '#' },
  ];

  curriculumAndYearGroupsMenu = [
    { label: 'Curriculum Overview', url: '#' },
    { label: 'Beyond the Curriculum', url: '#' },
    { label: 'Reception', url: '#' },
    { label: 'Year 1', url: '#' },
    { label: 'Year 2', url: '#' },
    { label: 'Year 3', url: '#' },
    { label: 'Year 4', url: '#' },
    { label: 'Year 5', url: '#' },
    { label: 'Year 6', url: '#' },
    { label: 'English & Languages Curriculum Team', url: '#' },
    { label: 'Mathematics Curriculum Team', url: '#' },
    { label: 'Arts & Humanities Curriculum Team', url: '#' },
    { label: 'Health & Wellbeing Curriculum Team', url: '#' },
    { label: 'Science & Technology ', url: '#' },
    { label: 'Curriculum ', url: '#' },
  ];

  safeguardingMenu = [
    {
      label: 'Safeguarding Overview',
      url: 'safeguarding/overview',
    },
    {
      label: 'Safeguarding at Denbigh',
      url: 'safeguarding/safeguarding-at-denbigh',
    },

    { label: 'SEND at Denbigh', url: '/about' },
    { label: 'Behaviour Policy', url: 'safeguarding/behaviour-policy' },
    { label: 'Attendance', url: '/home' },
    { label: 'GDPR & Data Protection', url: '/about' },
  ];

  schoolLunchesMenu = [
    { label: 'School Lunch Menu', url: 'school-lunches/school-lunch-menu' },
    { label: 'School Meal Payments', url: '#' },
    { label: 'Whole School Food & Packed Lunch Policy', url: '#' },
  ];

  statutoryInformationMenu = [
    { label: 'Pupil Outcomes & Performance Measures', url: '/home' },
    { label: 'Inspection reports', url: '/about' },
    { label: 'Pupils Premium Report', url: '/about' },
    { label: 'Sports Premium Report', url: '/home' },
    { label: 'Recovery Curriculum', url: '/about' },
    { label: 'Statutory Policies', url: '/about' },
  ];

  parentAndCarerReferenceMenu = [
    { label: 'School Admissions', url: 'parent-and-carer/school-admission' },
    { label: 'The School Day', url: 'parent-and-carer/school-day' },
    { label: 'Academic Calendar', url: 'parent-and-carer/acedemic-calendar' },
    { label: 'News and Events', url: 'parent-and-carer/news-and-events' },
    { label: 'School Uniform', url: 'parent-and-carer/school-uniform' },
    { label: 'School Contact Details', url: 'parent-and-carer/school-contact-details' },
    {
      label: 'Extended School Provision',
      url: 'parent-and-carer/extended-school-provision',
    },
  ];
  constructor() {}

  closeMobileMenu() {
    // Close the mobile menu by toggling the collapse button if it is open
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (
      navbarToggler &&
      navbarCollapse &&
      navbarCollapse.classList.contains('show')
    ) {
      navbarToggler.dispatchEvent(new Event('click'));
    }
  }

  scrollToTop(): void {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
