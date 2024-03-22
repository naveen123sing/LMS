import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Topic } from 'src/assets/models/topic';
import { Unit } from 'src/assets/models/unit';
import { TopicService } from 'src/assets/services/topic.service';
import { UnitService } from 'src/assets/services/unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss', '../../reports/styles/reports.scss']
})
export class UnitComponent {
  displayedColumns: string[] = ['select', 'code', 'name', 'description'];
  availableUnits = new MatTableDataSource<Unit>();
  assignedUnits = new MatTableDataSource<Unit>();
  selectionavailableUnits = new SelectionModel<Unit>(true, []);
  selectionassignedUnits = new SelectionModel<Unit>(true, []);
  units: Unit[] = [];
  selectedTopic: any;
  topics: Topic[] = [];

  constructor(private unitService: UnitService, private topicService: TopicService) {
    this.unitService.getUnit().subscribe(
      (data) => {
        this.units = data;
        this.availableUnits.data = data;
      },
      (error) => {
        console.error('Error fetching topics:', error);
      }
    );

    this.topicService.getTopic().subscribe(
      (data) => {
        this.topics = data;
      },
      (error) => {
        console.error('Error fetching topics:', error);
      }
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedAvailableSubject() {
    const numSelected = this.selectionavailableUnits.selected.length;
    const numRows = this.availableUnits.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleAvailableSubject() {
    this.isAllSelectedAvailableSubject() ?
      this.selectionavailableUnits.clear() :
      this.availableUnits.data.forEach(row => this.selectionavailableUnits.select(row));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedAssignedSubject() {
    const numSelected = this.selectionassignedUnits.selected.length;
    const numRows = this.assignedUnits.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleAssignedSubject() {
    this.isAllSelectedAssignedSubject() ?
      this.selectionassignedUnits.clear() :
      this.assignedUnits.data.forEach(row => this.selectionassignedUnits.select(row));
  }

  assignSubject() {
    const selectedElements = this.selectionavailableUnits.selected;
    this.availableUnits.data = this.availableUnits.data.filter(element => !selectedElements.includes(element));
    this.assignedUnits.data = this.assignedUnits.data.concat(selectedElements);
    this.selectionavailableUnits.clear();
  }

  unassignSubject() {
    const selectedElements = this.selectionassignedUnits.selected;
    this.assignedUnits.data = this.assignedUnits.data.filter(element => !selectedElements.includes(element));
    this.availableUnits.data = this.availableUnits.data.concat(selectedElements);
    this.selectionassignedUnits.clear();
  }

  saveBatchSubject() {
    const SubjectSubjectData = {
      bindid: this.selectedTopic,
      bindtoids: this.assignedUnits.data.map(x => x.unitid)
    };

    this.topicService.saveSubjectTopic(SubjectSubjectData).subscribe(response => {
      console.log('Response:', response);
    }, error => {
      console.error('Error:', error);
    });
  }

  onBatchChange() {
    this.assignedUnits.data = [];
    this.availableUnits.data = this.units;
    this.unitService.getTopicUnit(this.selectedTopic).subscribe(
      (data) => {
        this.assignedUnits.data = data;
        const assignedSubjectIds = this.assignedUnits.data.map(ele => ele.unitid);
        const filteredAvailableSubject = this.availableUnits.data.filter(ele => !assignedSubjectIds.includes(ele.unitid));
        this.availableUnits.data = filteredAvailableSubject;
      },
      (error) => {
        console.error('Error fetching batches:', error);
      }
    );
  }

  reset() {
    this.availableUnits.data = this.units;
    this.selectedTopic = '';
    this.assignedUnits.data = [];
  }
}
