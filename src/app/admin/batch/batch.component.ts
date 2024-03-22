import { Component } from '@angular/core';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent {
  showBatchMaster: boolean = true;
  showBatchCourse: boolean = false;
  showBatchDetails: boolean = false;
  showBatchFaculty: boolean = false;
  showBatchFee: boolean = false;
  showAddUser: boolean = false;

  setActiveComponent(componentName: string): void {
    this.showBatchMaster = componentName === 'showBatchMaster';
    this.showBatchCourse = componentName === 'showBatchCourse';
    this.showBatchDetails = componentName === 'showBatchDetails';
    this.showBatchFaculty = componentName === 'showBatchFaculty';
    this.showBatchFee = componentName === 'showBatchFee';
    this.showAddUser = componentName === 'showAddUser';
  }

}
