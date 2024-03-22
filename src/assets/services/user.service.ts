import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {
    this.userEmailSubject.next(localStorage.getItem('email'));
  }

  private userEmailSubject = new BehaviorSubject<string | null>(null);
  userEmail$ = this.userEmailSubject.asObservable();


  updateUserEmail(email: string | null) {
    this.userEmailSubject.next(email);
    if (email !== null) {
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('email');
    }
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users/loginuser`);
  }

}
