import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../../assets/services/auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.isLoggedIn;
    if (user) {
      // user is logged in, return true
      return true;
    }

    // user is not logged in, redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
  }
}
