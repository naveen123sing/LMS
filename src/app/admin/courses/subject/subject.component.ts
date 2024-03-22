import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/assets/models/course';
import { Subject } from 'src/assets/models/subject';
import { CourseService } from 'src/assets/services/course.service';
import { SubjectreportService } from 'src/assets/services/subjectreport.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss', '../../reports/styles/reports.scss']
})
export class SubjectComponent {
  displayedColumns: string[] = ['select', 'code', 'name', 'description'];
  availableSubjects = new MatTableDataSource<Subject>();
  assignedSubjects = new MatTableDataSource<Subject>();
  selectionAvailableSubjects = new SelectionModel<Subject>(true, []);
  selectionAssignedSubjects = new SelectionModel<Subject>(true, []);
  subjects: Subject[] = [];
  selectedCourse: any;
  courses: Course[] = [];

  constructor(private subjectService: SubjectreportService, private courseService: CourseService) {
    this.courseService.getCourse().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );

    this.subjectService.getSubjects().subscribe(
      (data) => {
        this.subjects = data;
        this.availableSubjects.data = data;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedAvailableSubject() {
    const numSelected = this.selectionAvailableSubjects.selected.length;
    const numRows = this.availableSubjects.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleAvailableSubject() {
    this.isAllSelectedAvailableSubject() ?
      this.selectionAvailableSubjects.clear() :
      this.availableSubjects.data.forEach(row => this.selectionAvailableSubjects.select(row));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedAssignedCourse() {
    const numSelected = this.selectionAssignedSubjects.selected.length;
    const numRows = this.assignedSubjects.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleAssignedCourse() {
    this.isAllSelectedAssignedCourse() ?
      this.selectionAssignedSubjects.clear() :
      this.assignedSubjects.data.forEach(row => this.selectionAssignedSubjects.select(row));
  }

  assignSubject() {
    const selectedElements = this.selectionAvailableSubjects.selected;
    this.availableSubjects.data = this.availableSubjects.data.filter(element => !selectedElements.includes(element));
    this.assignedSubjects.data = this.assignedSubjects.data.concat(selectedElements);
    this.selectionAvailableSubjects.clear();
  }

  unassignSubject() {
    const selectedElements = this.selectionAssignedSubjects.selected;
    this.assignedSubjects.data = this.assignedSubjects.data.filter(element => !selectedElements.includes(element));
    this.availableSubjects.data = this.availableSubjects.data.concat(selectedElements);
    this.selectionAssignedSubjects.clear();
  }

  saveBatchCourse() {
    const courseSubjectData = {
      courseid: this.selectedCourse,
      subjectids: this.assignedSubjects.data.map(x => x.subjectid)
    };

    this.subjectService.saveCourseSubject(courseSubjectData).subscribe(response => {
      console.log('Response:', response);
    }, error => {
      console.error('Error:', error);
    });
  }

  onBatchChange() {
    this.assignedSubjects.data = [];
    this.availableSubjects.data = this.subjects;
    this.subjectService.getCourseSubject(this.selectedCourse).subscribe(
      (data) => {
        this.assignedSubjects.data = data;
        const assignedSubjectIds = this.assignedSubjects.data.map(ele => ele.subjectid);
        const filteredAvailableSubject = this.availableSubjects.data.filter(ele => !assignedSubjectIds.includes(ele.subjectid));
        this.availableSubjects.data = filteredAvailableSubject;
      },
      (error) => {
        console.error('Error fetching batches:', error);
      }
    );
  }

  reset() {
    this.availableSubjects.data = this.subjects;
    this.selectedCourse = '';
    this.assignedSubjects.data = [];
  }
}
