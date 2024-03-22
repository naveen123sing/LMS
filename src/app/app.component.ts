import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/assets/services/auth.service';
import { TopnavbarService } from 'src/assets/services/topnavbar.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UserService } from 'src/assets/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lms';
  isOpen: boolean = false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = true;
  userEmail!: string | null;

  constructor(
    private observer: BreakpointObserver,
    public authService: AuthService,
    private router: Router,
    private userService: UserService,
    public topnavbarService: TopnavbarService) {
    this.topnavbarService.showToolbar = true;
  }

  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }

  closeEmitterHandler() {
    this.isOpen = false
    this.isCollapsed = true;
  }

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
    this.userService.userEmail$.subscribe((email) => {
      this.userEmail = email;
    });
  }


  onLogout() {
    this.authService.logout();
  }

  profile() {
    this.router.navigateByUrl('/profile')
  }

  shouldAutosize(): boolean {
    return this.router.url !== '/login';
  }

}
