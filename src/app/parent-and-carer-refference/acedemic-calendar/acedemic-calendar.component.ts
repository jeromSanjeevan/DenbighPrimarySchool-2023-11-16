import { Component, OnInit } from '@angular/core';
import { GoogledriveService } from 'src/app/service/googledrive.service';

@Component({
  selector: 'app-acedemic-calendar',
  templateUrl: './acedemic-calendar.component.html',
  styleUrls: ['./acedemic-calendar.component.css'],
})
export class AcedemicCalendarComponent  implements OnInit{
  googleDrivePdfLinks = [
    {
      name: 'Academic Calendar for Community Schools 2023/24',
      link: 'https://drive.google.com/file/d/127HOFMmmlgrim6h_o81jxYuHDLLbkbA8/view?usp=sharing',
    },
    {
      name: 'Academic Calendar for Community Schools 2024/25',
      link: 'https://drive.google.com/file/d/1eZZwh6m5K8NUo6BS1Tcpj82KtQj8o1ln/view?usp=sharing',
    },
    // Add more PDF links as needed
  ];

  autumnTerm = [
    { term: 'Term 1', period: '4 September 2023 - 20 October 2023' },
    { term: 'Half Term', period: '23 October 2023 - 27 October 2023' },
    { term: 'Term 2', period: '31 October 2023 - 19 December 2023' },
    { term: 'Christmas Break', period: '20 December 2023 - 03 January 2024' },
  ];

  springTerm = [
    { term: 'Term 3', period: '04 January 2024 - 16 February 2024' },
    { term: 'Half Term', period: '19 February 2024 - 23 February 2024' },
    { term: 'Term 4', period: '26 February 2024 - 28 March 2024' },
    { term: 'Easter Break', period: '29 March 2024 - 12 April 2024' },
  ];

  summerTerm = [
    { term: 5, period: '15 April 2024 - 24 May 2024' },
    { term: 'Half Term', period: '27 May 2024 - 31 May 2024' },
    { term: 6, period: '03 June 2024 - 18 July 2024' },
  ];

  insetDaysAndHolidaysates = [
    { term: 'Friday', period: '01 September 2023' },
    { term: 'Monday', period: '30th October 2023' },
    { term: 'Wednesday', period: '3rd January 2024' },
    { term: 'Friday', period: '12th April 2024' },
    { term: 'Friday', period: '19th July 2024' },
  ];




  constructor() {}

  ngOnInit() {
 
  }
  openPdfInNewTab(pdfLink: { name: string; link: string }) {
    // Open the PDF link in a new tab
    window.open(pdfLink.link, '_blank');
  }


}
