import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from '../models/subject';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SubjectreportService {

  constructor(private http: HttpClient) { }

  getSubjects() {
    return this.http.get<Subject[]>(`${environment.apiUrl}/subjects/getsubjects`);
  }

  saveCourseSubject(courseSubjectData: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + "/courses/savecoursesubject", courseSubjectData);
  }

  getCourseSubject(courseId: any): Observable<Subject[]> {
    return this.http.get<Subject[]>(environment.apiUrl + "/courses/getcoursesubjects/" + courseId);
  }
}
