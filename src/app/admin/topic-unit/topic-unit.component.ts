import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-unit',
  templateUrl: './topic-unit.component.html',
  styleUrls: ['./topic-unit.component.scss']
})
export class TopicUnitComponent {
  showSubjectMaster: boolean = true;
  showUnit: boolean = false;
  showBatchDetails: boolean = false;
  showBatchFaculty: boolean = false;
  showBatchFee: boolean = false;
  showAddUser: boolean = false;

  setActiveComponent(componentName: string): void {
    this.showSubjectMaster = componentName === 'showSubjectMaster';
    this.showUnit = componentName === 'showUnit';
    this.showBatchDetails = componentName === 'showBatchDetails';
    this.showBatchFaculty = componentName === 'showBatchFaculty';
    this.showBatchFee = componentName === 'showBatchFee';
    this.showAddUser = componentName === 'showAddUser';
  }
}
