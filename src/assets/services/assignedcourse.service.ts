import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AssignedCourse } from '../models/assignedcourse';

@Injectable({
  providedIn: 'root'
})
export class AssignedcourseService {

  constructor(private http: HttpClient,private router: Router) { }

  getReports(string: any):Observable<string[]>{
    const apiReport = "http://192.168.200.73:8001/reports/"+ string;
    return this.http.get<any[]>(apiReport);
  }

  getUserContent():Observable<string[]>{
    const apiReport = "http://192.168.200.73:8001/usercontent/getAllContentByUser";
    return this.http.get<any[]>(apiReport);
  }

  getUserContentById(id: number):Observable<string[]>{
    const apiReport = "http://192.168.200.73:8001/usercontent/getById/"+id;
    return this.http.get<any[]>(apiReport);
  }

  getUserContentByUidSid(id: number,sid: number):Observable<string[]>{
    const apiReport = "http://192.168.200.73:8001/usercontent/getByIdSid/"+id+"/"+sid;
    return this.http.get<any[]>(apiReport);
  }


}
