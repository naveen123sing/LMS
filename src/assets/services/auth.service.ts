import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInKey = 'isLoggedIn';
  isLoggedIn: boolean = localStorage.getItem(this.isLoggedInKey) === 'true';
  userRole: string = '';

  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(private http: HttpClient,
    private router: Router,
    private userService: UserService) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }
  login(credentials: { email: string; password: string }): Observable<User> {
    const loginUrl = `${environment.apiUrl}/users/login`;
    return this.http.post(loginUrl, credentials, { responseType: 'text' }).pipe(
      map((response: any) => {

        this.isLoggedIn = true;
        localStorage.setItem(this.isLoggedInKey, 'true');
        this.userService.updateUserEmail(credentials.email);
        return response;
      }),
      catchError((error: any) => {
        console.error('API Error:', error);
        this.isLoggedIn = false;
        localStorage.setItem(this.isLoggedInKey, 'false');
        return throwError('Login failed');
      })
    );
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem(this.isLoggedInKey);
    this.router.navigateByUrl('/login');
    this.userService.updateUserEmail(null);
  }




  // login(email: string, password: string): boolean {
  //   if (email === 'admin@example.com' && password === '123') {
  //     this.isLoggedIn = true;
  //     this.userRole = 'a'; // Set user role to 'admin'
  //     return true;
  //   } else if (email === 'user@example.com' && password === '123') {
  //     this.isLoggedIn = true;
  //     this.userRole = 'b'; // Set user role to 'user'
  //     return true;
  //   }
  //   return false;
  // }

  isAdmin(): boolean {
    return this.user && this.userRole === '';
  }

  isUser(): boolean {
    return this.user && this.userRole === 'b';
  }

}

