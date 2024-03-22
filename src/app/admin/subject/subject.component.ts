import { Component } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  showSubjectMaster: boolean = true;
  showTopic: boolean = false;
  showBatchDetails: boolean = false;
  showBatchFaculty: boolean = false;
  showBatchFee: boolean = false;
  showAddUser: boolean = false;

  setActiveComponent(componentName: string): void {
    this.showSubjectMaster = componentName === 'showSubjectMaster';
    this.showTopic = componentName === 'showTopic';
    this.showBatchDetails = componentName === 'showBatchDetails';
    this.showBatchFaculty = componentName === 'showBatchFaculty';
    this.showBatchFee = componentName === 'showBatchFee';
    this.showAddUser = componentName === 'showAddUser';
  }
}
