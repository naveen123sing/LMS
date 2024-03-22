import { Component } from '@angular/core';
import { CourseService } from 'src/assets/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  formData: any = {}; // Define an object to hold form data

  constructor(private courseService: CourseService) {
  }

  submitForm() {
    this.courseService.saveCourse(this.formData).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Error fetching batches:', error);
      }
    );
  }
}
