import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Unit } from '../models/unit';

@Injectable({
    providedIn: 'root'
})
export class UnitService {

    constructor(private http: HttpClient, private router: Router) { }

    getUnit(): Observable<Unit[]> {
        return this.http.get<Unit[]>(environment.apiUrl + "/units/getunits");
    }

    saveUnit(unitData: Unit[]): Observable<Unit[]> {
        return this.http.post<Unit[]>(environment.apiUrl + "/topics/savetopic", unitData);
    }

    saveTopicUnit(topicUnitData: any): Observable<any> {
        return this.http.post<any>(environment.apiUrl + "/topics/bindtopicunits", topicUnitData);
    }

    getTopicUnit(topicId: any): Observable<Unit[]> {
        return this.http.get<Unit[]>(environment.apiUrl + "/topics/gettopicunits/" + topicId);
    }

}
