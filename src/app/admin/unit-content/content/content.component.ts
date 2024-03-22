import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Content } from 'src/assets/models/content';
import { Unit } from 'src/assets/models/unit';
import { ContentService } from 'src/assets/services/content.service';
import { UnitService } from 'src/assets/services/unit.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss', '../../reports/styles/reports.scss']
})
export class ContentComponent {
  displayedColumns: string[] = ['select', 'code', 'name', 'description'];
  availableContents = new MatTableDataSource<Content>();
  assignedContents = new MatTableDataSource<Content>();
  selectionavailableContents = new SelectionModel<Content>(true, []);
  selectionassignedContents = new SelectionModel<Content>(true, []);
  units: Unit[] = [];
  selectedUnit: any;
  contents: Content[] = [];

  constructor(private unitService: UnitService, private contentService: ContentService) {
    this.unitService.getUnit().subscribe(
      (data) => {
        this.units = data;
      },
      (error) => {
        console.error('Error fetching topics:', error);
      }
    );

    this.contentService.getContent().subscribe(
      (data) => {
        this.contents = data;
        this.availableContents.data = data;
      },
      (error) => {
        console.error('Error fetching topics:', error);
      }
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedAvailableSubject() {
    const numSelected = this.selectionavailableContents.selected.length;
    const numRows = this.availableContents.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleAvailableSubject() {
    this.isAllSelectedAvailableSubject() ?
      this.selectionavailableContents.clear() :
      this.availableContents.data.forEach(row => this.selectionavailableContents.select(row));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedAssignedSubject() {
    const numSelected = this.selectionassignedContents.selected.length;
    const numRows = this.assignedContents.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleAssignedSubject() {
    this.isAllSelectedAssignedSubject() ?
      this.selectionassignedContents.clear() :
      this.assignedContents.data.forEach(row => this.selectionassignedContents.select(row));
  }

  assignSubject() {
    const selectedElements = this.selectionavailableContents.selected;
    this.availableContents.data = this.availableContents.data.filter(element => !selectedElements.includes(element));
    this.assignedContents.data = this.assignedContents.data.concat(selectedElements);
    this.selectionavailableContents.clear();
  }

  unassignSubject() {
    const selectedElements = this.selectionassignedContents.selected;
    this.assignedContents.data = this.assignedContents.data.filter(element => !selectedElements.includes(element));
    this.availableContents.data = this.availableContents.data.concat(selectedElements);
    this.selectionassignedContents.clear();
  }

  saveBatchSubject() {
    const SubjectSubjectData = {
      bindid: this.selectedUnit,
      bindtoids: this.assignedContents.data.map(x => x.contentid)
    };

    this.contentService.saveUnitContent(SubjectSubjectData).subscribe(response => {
      console.log('Response:', response);
    }, error => {
      console.error('Error:', error);
    });
  }

  onBatchChange() {
    this.assignedContents.data = [];
    this.availableContents.data = this.contents;
    this.unitService.getTopicUnit(this.selectedUnit).subscribe(
      (data) => {
        // this.assignedContents.data = data;
        const assignedSubjectIds = this.assignedContents.data.map(ele => ele.contentid);
        const filteredAvailableSubject = this.availableContents.data.filter(ele => !assignedSubjectIds.includes(ele.contentid));
        this.availableContents.data = filteredAvailableSubject;
      },
      (error) => {
        console.error('Error fetching batches:', error);
      }
    );
  }

  reset() {
    this.availableContents.data = this.contents;
    this.selectedUnit = '';
    this.assignedContents.data = [];
  }
}
