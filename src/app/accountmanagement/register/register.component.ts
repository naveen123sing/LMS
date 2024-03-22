import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopnavbarService } from 'src/assets/services/topnavbar.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private router: Router,
    private topnavbarService: TopnavbarService
  ) {
    this.topnavbarService.showToolbar = false;
  }

  selectedUserType: string = 'Guest';
  goToLogin() {
    this.router.navigate(['./login']);
  }
}

