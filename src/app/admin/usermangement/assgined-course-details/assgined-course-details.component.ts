import { Component } from '@angular/core';
import { AssignedcourseService } from 'src/assets/services/assignedcourse.service';

@Component({
  selector: 'app-assgined-course-details',
  templateUrl: './assgined-course-details.component.html',
  styleUrls: ['./assgined-course-details.component.scss']
})
export class AssginedCourseDetailsComponent {
  userId: number = 2;
  UserContentData: any[] = [];
  selectedButton: string = '';

  constructor(private assignedcourseService: AssignedcourseService) { }

  ngOnInit(): void {
    this.assignedcourseService.getUserContentById(this.userId).subscribe((data: any[]) => {
      this.UserContentData = data;
      console.log(this.UserContentData);
    });
  }

  onClickAll(): void {
    this.assignedcourseService.getUserContentById(this.userId).subscribe((data: any[]) => {
      this.UserContentData = data;
      console.log(this.UserContentData);

    });
  }

  onClickSubject(sid: number): void {
    this.assignedcourseService.getUserContentByUidSid(this.userId, sid).subscribe((data: any[]) => {
      this.UserContentData = data;
      console.log(this.UserContentData);

    });

  }

  changeColor(button: string): void {
    this.selectedButton = button;
  }
}
