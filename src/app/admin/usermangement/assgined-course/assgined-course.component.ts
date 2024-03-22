import { Component } from '@angular/core';

@Component({
  selector: 'app-assgined-course',
  templateUrl: './assgined-course.component.html',
  styleUrls: ['./assgined-course.component.scss']
})
export class AssginedCourseComponent {
  selectedButton: string = '';

  changeColor(button: string): void {
    this.selectedButton = button;
  }
}
