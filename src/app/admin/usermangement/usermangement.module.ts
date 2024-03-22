import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsermangementComponent } from './usermangement.component';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { UserComponent } from './user/user.component';
import { ContentProviderComponent } from './content-provider/content-provider.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AssginedCourseComponent } from './assgined-course/assgined-course.component';
import { AssginedCourseDetailsComponent } from './assgined-course-details/assgined-course-details.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthGuard } from 'src/app/auth/auth.gurd';
import { FacultyuploadComponent } from './facultyupload/facultyupload.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [
  { path: 'faculty', component: FacultyComponent, canActivate: [AuthGuard], },
  { path: 'contentprovider', component: ContentProviderComponent, canActivate: [AuthGuard], },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], },
  { path: 'editprofile', component: EditprofileComponent, canActivate: [AuthGuard], },
  { path: 'assgined-course', component: AssginedCourseComponent, canActivate: [AuthGuard], },
  { path: 'assgined-course-details', component: AssginedCourseDetailsComponent, canActivate: [AuthGuard], },
  { path: 'facultyupload', component: FacultyuploadComponent, canActivate: [AuthGuard], }
];

@NgModule({
  declarations: [
    UsermangementComponent,
    UserComponent,
    ContentProviderComponent,
    FacultyComponent,
    AssginedCourseComponent,
    AssginedCourseDetailsComponent,
    FacultyuploadComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    NgChartsModule,
    [RouterModule.forChild(routes)],
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [RouterModule],
})
export class UsermangementModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
