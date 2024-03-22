import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.scss']
})
export class AdminCoursesComponent {

  items = [
    { checked: false, /* other properties */ },
    /* more items */
  ];

  toggleAllCheckboxes(event: any) {
    const isChecked = event.target.checked;
    this.items.forEach(item => item.checked = isChecked);
  }

  isAllSelected() {
    return this.items.every(item => item.checked);
  }

  toggleCheckbox(item: any) {
    item.checked = !item.checked;
  }
}
