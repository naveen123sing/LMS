import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private http: HttpClient, private router: Router) { }

    getCourse(): Observable<Course[]> {
        return this.http.get<Course[]>(environment.apiUrl + "/courses/getcourses");
    }

    saveCourse(courseData: Course[]): Observable<Course[]> {
        return this.http.post<Course[]>(environment.apiUrl + "/courses/savecourse", courseData);
    }

}
