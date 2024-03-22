import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/assets/services/auth.service';
import { TopnavbarService } from 'src/assets/services/topnavbar.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent {
  isLoggedIn: boolean = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  loginForm: FormGroup;
  public showPassword: boolean = false
  public showPasswordOnPress: boolean = false;


  constructor(
    private authService: AuthService,
    public router: Router,
    private topnavbarService: TopnavbarService,
    private translate: TranslateService) {
    this.translate.setDefaultLang(environment.language);
    this.topnavbarService.showToolbar = false;
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {
  }


  // submit(loginForm: any) {
  //   if (loginForm.valid) {
  //     const email = this.email.value as string;
  //     const password = this.password.value as string;
  //     if (this.authService.login(email, password)) {
  //       localStorage.setItem('isLoggedIn', 'true');
  //       // Set showToolbar to true after successful login
  //       this.topnavbarService.showToolbar = true;

  //       // Redirect based on user role
  //       if (this.authService.userRole === 'a') {
  //         this.router.navigateByUrl('/editprofile');
  //       } else if (this.authService.userRole === 'b') {
  //         this.router.navigateByUrl('/assgined-course');
  //       } else {
  //         // Handle unknown roles or provide a default route
  //       }
  //     } else {
  //       alert('Invalid credentials');
  //     }
  //   }
  // }

  submit() {
    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.authService.login(credentials).subscribe(
        (response: any) => {
          if (typeof response === 'string' && response.trim() !== 'Invalid') {
            localStorage.setItem('Response', response);
            this.router.navigateByUrl(response);
            localStorage.setItem('email', this.loginForm.value.email);
            const storedResponse = localStorage.getItem('Response');
            // console.log("Stored Response in side menu:", storedResponse);

            this.topnavbarService.showToolbar = true;
            console.log("RESPONSE:-----------", response);
          } else {
            alert("Incorrect email or password. Please try again.")

          }
        }
      );
    }
  }

  goToRegister() {
    this.router.navigate(['./register']);
  }
}
