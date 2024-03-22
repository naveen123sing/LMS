import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { AuthGuard } from 'src/app/auth/auth.gurd';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BatchComponent } from './batch/batch.component';
import { CoursesComponent } from './courses/courses.component';
import { SubjectComponent } from './subject/subject.component';
import { TopicUnitComponent } from './topic-unit/topic-unit.component';
import { UnitContentComponent } from './unit-content/unit-content.component';

const routes: Routes = [
  { path: 'usermangement', loadChildren: () => import('./usermangement/usermangement.module').then(m => m.UsermangementModule), canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule), canActivate: [AuthGuard] },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule), canActivate: [AuthGuard] },
  { path: 'coursemaster', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'subjects', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule), canActivate: [AuthGuard] },
  { path: 'subjectmaster', component: SubjectComponent, canActivate: [AuthGuard] },
  { path: 'topics', loadChildren: () => import('./topic-unit/topic-unit.module').then(m => m.TopicUnitModule), canActivate: [AuthGuard] },
  { path: 'topicmaster', component: TopicUnitComponent, canActivate: [AuthGuard] },
  { path: 'units', loadChildren: () => import('./unit-content/unit-content.module').then(m => m.UnitContentModule), canActivate: [AuthGuard] },
  { path: 'unitmaster', component: UnitContentComponent, canActivate: [AuthGuard] },
  { path: 'admin-courses', component: AdminCoursesComponent, canActivate: [AuthGuard] },
  { path: 'batch', loadChildren: () => import('./batch/batch.module').then(m => m.BatchModule), canActivate: [AuthGuard] },
  { path: 'batchmaster', component: BatchComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
