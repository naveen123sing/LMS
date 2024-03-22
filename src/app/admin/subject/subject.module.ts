import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject.component';
import { TopicComponent } from './topic/topic.component';
import { AuthGuard } from 'src/app/auth/auth.gurd';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


const routes: Routes = [
  {
    path: 'topic',
    component: TopicComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [
    TopicComponent,
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
export class SubjectModule { }
