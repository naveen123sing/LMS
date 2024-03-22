import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AccountmanagementModule } from './accountmanagement/accountmanagement.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminModule } from './admin/admin.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CdkMenuModule } from '@angular/cdk/menu';
import { EditprofileComponent } from './admin/usermangement/editprofile/editprofile.component';
import { NgChartsModule } from 'ng2-charts';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatExpansionModule } from '@angular/material/expansion';
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CircleProgressOptions } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    EditprofileComponent,
    AdminCoursesComponent,

  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AccountmanagementModule,
    AdminModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    CdkMenuModule,
    NgChartsModule,
    MatSidenavModule,
    FontAwesomeModule,
    MatExpansionModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [CircleProgressOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
