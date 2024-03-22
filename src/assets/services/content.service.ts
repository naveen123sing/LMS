import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Content } from '../models/content';

@Injectable({
    providedIn: 'root'
})
export class ContentService {

    constructor(private http: HttpClient, private router: Router) { }

    getContent(): Observable<Content[]> {
        return this.http.get<Content[]>(environment.apiUrl + "/contents/getcontents");
    }

    saveContent(contentData: Content[]): Observable<Content[]> {
        return this.http.post<Content[]>(environment.apiUrl + "/contents/savecontent", contentData);
    }

    saveUnitContent(unitContentData: any): Observable<any> {
        return this.http.post<any>(environment.apiUrl + "/units/bindunitcontents", unitContentData);
    }

    getUnitContent(subjectId: any): Observable<Content[]> {
        return this.http.get<Content[]>(environment.apiUrl + "/subjects/getsubjecttopics/" + subjectId);
    }

}
