import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface YourItem {
  id: number;
  name: string;
  description: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-extended-school-provision',
  templateUrl: './extended-school-provision.component.html',
  styleUrls: ['./extended-school-provision.component.css'],
})
export class ExtendedSchoolProvisionComponent {
  headerHeading: string = 'Extended School Provision';
  items: YourItem[] = [];

  ngOnInit(): void {
    this.getItems().subscribe(items => {
      this.items = items;
    });
  }
  getItems(): Observable<YourItem[]> {
    const items: YourItem[] = [
      { id: 1, name: 'Item 1', description: 'Description for Item 1' },
      { id: 2, name: 'Item 2', description: 'Description for Item 2' },
      { id: 3, name: 'Item 3', description: 'Description for Item 3' },
      // Add more items as needed
    ];

    return of(items);
  }


}
