import { Component } from '@angular/core';
import { BatchService } from 'src/assets/services/batch.service';

@Component({
  selector: 'app-batch-master',
  templateUrl: './batch-master.component.html',
  styleUrls: ['./batch-master.component.scss']
})
export class BatchMasterComponent {
  formData: any = {}; // Define an object to hold form data

  constructor(private batchService: BatchService) {
  }

  submitForm() {
    this.batchService.saveBatch(this.formData).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Error fetching batches:', error);
      }
    );
  }
}
