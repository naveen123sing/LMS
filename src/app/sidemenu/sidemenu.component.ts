import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/assets/services/auth.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  @Input() isCollapsed: boolean = false;

  @Output() closeEmitter = new EventEmitter();
  shouldShowContentProvider: boolean = false;
  shouldFaculty: boolean = false;


  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    const storedResponse = localStorage.getItem('Response');
    // Adjust the conditions based on your logic
    this.shouldShowContentProvider = storedResponse !== '/user';
    this.shouldFaculty = storedResponse !== '/faculty';
  }




  closeEventEmitter() {
    this.closeEmitter.emit()
  }

  // navigateTo(path: string) {
  //   this.router.navigate([path])
  //   this.closeEventEmitter()
  // }


  navigateTo() {
    this.closeEventEmitter()
  }
}
