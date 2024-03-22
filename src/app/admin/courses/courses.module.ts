import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { AuthGuard } from 'src/app/auth/auth.gurd';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: 'subject',
    component: SubjectComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [
    CoursesComponent,
    AddCourseComponent,
    SubjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CoursesModule { }
