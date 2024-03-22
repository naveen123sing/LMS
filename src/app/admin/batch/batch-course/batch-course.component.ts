import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Batch } from 'src/assets/models/batch';
import { Course } from 'src/assets/models/course';
import { BatchService } from 'src/assets/services/batch.service';
import { CourseService } from 'src/assets/services/course.service';

@Component({
  selector: 'app-batch-course',
  templateUrl: './batch-course.component.html',
  styleUrls: ['./batch-course.component.scss', '../../reports/styles/reports.scss']
})
export class BatchCourseComponent {
  displayedColumns: string[] = ['select', 'code', 'name', 'description'];
  availableCourse = new MatTableDataSource<Course>();
  assignedCourse = new MatTableDataSource<Course>();
  selectionAvailableCourse = new SelectionModel<Course>(true, []);
  selectionAssignedCourse = new SelectionModel<Course>(true, []);
  batches: Batch[] = [];
  selectedBatch: any; // To store the selected batch
  courses: Course[] = [];

  constructor(private batchService: BatchService, private courseService: CourseService) {
    this.batchService.getBatch().subscribe(
      (data) => {
        this.batches = data;
      },
      (error) => {
        console.error('Error fetching batches:', error);
      }
    );

    this.courseService.getCourse().subscribe(
      (data) => {
        this.courses = data;
        this.availableCourse.data = data;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedAvailableCourse() {
    const numSelected = this.selectionAvailableCourse.selected.length;
    const numRows = this.availableCourse.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleAvailableCourse() {
    this.isAllSelectedAvailableCourse() ?
      this.selectionAvailableCourse.clear() :
      this.availableCourse.data.forEach(row => this.selectionAvailableCourse.select(row));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedAssignedCourse() {
    const numSelected = this.selectionAssignedCourse.selected.length;
    const numRows = this.assignedCourse.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleAssignedCourse() {
    this.isAllSelectedAssignedCourse() ?
      this.selectionAssignedCourse.clear() :
      this.assignedCourse.data.forEach(row => this.selectionAssignedCourse.select(row));
  }

  assignCourse() {
    // Assuming 'selectionAvailableCourse' is an array of selected elements
    const selectedElements = this.selectionAvailableCourse.selected;

    // Remove selected elements from 'availableCourse'
    this.availableCourse.data = this.availableCourse.data.filter(element => !selectedElements.includes(element));

    // Add selected elements to 'assignedCourse'
    this.assignedCourse.data = this.assignedCourse.data.concat(selectedElements);

    // Clear the selection
    this.selectionAvailableCourse.clear();
  }

  unassignCourse() {
    // Assuming 'selectionAvailableCourse' is an array of selected elements
    const selectedElements = this.selectionAssignedCourse.selected;

    // Remove selected elements from 'availableCourse'
    this.assignedCourse.data = this.assignedCourse.data.filter(element => !selectedElements.includes(element));

    // Add selected elements to 'assignedCourse'
    this.availableCourse.data = this.availableCourse.data.concat(selectedElements);

    // Clear the selection
    this.selectionAssignedCourse.clear();
  }

  saveBatchCourse() {
    const batchCourseData = {
      batchid: this.selectedBatch,
      courseids: this.assignedCourse.data.map(x => x.courseid)
    };

    this.batchService.saveBatchCourse(batchCourseData).subscribe(response => {
      console.log('Response:', response);
    }, error => {
      console.error('Error:', error);
    });
  }

  onBatchChange() {
    this.assignedCourse.data = [];
    this.availableCourse.data = this.courses;
    this.batchService.getBatchCourse(this.selectedBatch).subscribe(
      (data) => {
        this.assignedCourse.data = data;
        // Get the IDs of assigned courses
        const assignedCourseIds = this.assignedCourse.data.map(course => course.courseid);

        // Filter availableCourse to exclude assigned courses
        const filteredAvailableCourse = this.availableCourse.data.filter(course => !assignedCourseIds.includes(course.courseid));

        // Update availableCourse with the filtered array
        this.availableCourse.data = filteredAvailableCourse;
      },
      (error) => {
        console.error('Error fetching batches:', error);
      }
    );
  }

  reset() {
    this.availableCourse.data = this.courses;
    this.selectedBatch = '';
    this.assignedCourse.data = [];
  }
}
