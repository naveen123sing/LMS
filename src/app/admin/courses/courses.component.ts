import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  showCourseMaster: boolean = true;
  showCourseSubject: boolean = false;
  showBatchDetails: boolean = false;
  showBatchFaculty: boolean = false;
  showBatchFee: boolean = false;
  showAddUser: boolean = false;

  setActiveComponent(componentName: string): void {
    this.showCourseMaster = componentName === 'showCourseMaster';
    this.showCourseSubject = componentName === 'showCourseSubject';
    this.showBatchDetails = componentName === 'showBatchDetails';
    this.showBatchFaculty = componentName === 'showBatchFaculty';
    this.showBatchFee = componentName === 'showBatchFee';
    this.showAddUser = componentName === 'showAddUser';
  }
}
