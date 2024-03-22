import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Topic } from '../models/topic';

@Injectable({
    providedIn: 'root'
})
export class TopicService {

    constructor(private http: HttpClient, private router: Router) { }

    getTopic(): Observable<Topic[]> {
        return this.http.get<Topic[]>(environment.apiUrl + "/topics/gettopics");
    }

    saveTopic(topicData: Topic[]): Observable<Topic[]> {
        return this.http.post<Topic[]>(environment.apiUrl + "/topics/savetopic", topicData);
    }

    saveSubjectTopic(subjectTopicData: any): Observable<any> {
        return this.http.post<any>(environment.apiUrl + "/subjects/bindsubjecttopic", subjectTopicData);
    }

    getSubjectTopic(subjectId: any): Observable<Topic[]> {
        return this.http.get<Topic[]>(environment.apiUrl + "/subjects/getsubjecttopics/" + subjectId);
    }

}
