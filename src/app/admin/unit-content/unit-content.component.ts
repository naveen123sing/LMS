import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-content',
  templateUrl: './unit-content.component.html',
  styleUrls: ['./unit-content.component.scss']
})
export class UnitContentComponent {
  showSubjectMaster: boolean = true;
  showContent: boolean = false;
  showBatchDetails: boolean = false;
  showBatchFaculty: boolean = false;
  showBatchFee: boolean = false;
  showAddUser: boolean = false;

  setActiveComponent(componentName: string): void {
    this.showSubjectMaster = componentName === 'showSubjectMaster';
    this.showContent = componentName === 'showContent';
    this.showBatchDetails = componentName === 'showBatchDetails';
    this.showBatchFaculty = componentName === 'showBatchFaculty';
    this.showBatchFee = componentName === 'showBatchFee';
    this.showAddUser = componentName === 'showAddUser';
  }
}
