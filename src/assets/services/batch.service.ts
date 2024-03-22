import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Batch } from '../models/batch';
import { Course } from '../models/course';

@Injectable({
    providedIn: 'root'
})
export class BatchService {

    constructor(private http: HttpClient, private router: Router) { }

    getBatch(): Observable<Batch[]> {
        return this.http.get<Batch[]>(environment.apiUrl + "/batches/getbatches");
    }

    saveBatch(batchData: Batch): Observable<Batch> {
        return this.http.post<Batch>(environment.apiUrl + "/batches/savebatch", batchData);
    }

    saveBatchCourse(batchCourseData: any): Observable<any> {
        return this.http.post<any>(environment.apiUrl + "/batches/savebatchcourse", batchCourseData);
    }

    getBatchCourse(batchId: any): Observable<Course[]> {
        return this.http.get<Course[]>(environment.apiUrl + "/batches/getbatchcourses/" + batchId);
    }

}
