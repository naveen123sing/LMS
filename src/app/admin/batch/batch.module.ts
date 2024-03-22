import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchComponent } from './batch.component';
import { BatchCourseComponent } from './batch-course/batch-course.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchFacultyComponent } from './batch-faculty/batch-faculty.component';
import { RouterModule, Routes } from '@angular/router';
import { BatchFeeComponent } from './batch-fee/batch-fee.component';
import { BatchMasterComponent } from './batch-master/batch-master.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthGuard } from 'src/app/auth/auth.gurd';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'adduser',
    component: AddUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'batchcourse',
    component: BatchCourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'batchdetails',
    component: BatchDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'batchfaculty',
    component: BatchFacultyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'batchfee',
    component: BatchFeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'batchmaster',
    component: BatchMasterComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AddUserComponent,
    BatchComponent,
    BatchCourseComponent,
    BatchDetailsComponent,
    BatchFacultyComponent,
    BatchMasterComponent,
    BatchFeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatTableModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BatchModule { }
