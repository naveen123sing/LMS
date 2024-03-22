import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'src/assets/models/subject';
import { Topic } from 'src/assets/models/topic';
import { SubjectreportService } from 'src/assets/services/subjectreport.service';
import { TopicService } from 'src/assets/services/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss', '../../reports/styles/reports.scss']
})
export class TopicComponent {
  displayedColumns: string[] = ['select', 'code', 'name', 'description'];
  availableTopics = new MatTableDataSource<Topic>();
  assignedTopics = new MatTableDataSource<Topic>();
  selectionAvailableTopics = new SelectionModel<Topic>(true, []);
  selectionAssignedTopics = new SelectionModel<Topic>(true, []);
  subjects: Subject[] = [];
  selectedSubject: any;
  topics: Topic[] = [];

  constructor(private subjectService: SubjectreportService, private topicService: TopicService) {
    this.subjectService.getSubjects().subscribe(
      (data) => {
        this.subjects = data;
      },
      (error) => {
        console.error('Error fetching Subjects:', error);
      }
    );

    this.topicService.getTopic().subscribe(
      (data) => {
        this.topics = data;
        this.availableTopics.data = data;
      },
      (error) => {
        console.error('Error fetching topics:', error);
      }
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedAvailableSubject() {
    const numSelected = this.selectionAvailableTopics.selected.length;
    const numRows = this.availableTopics.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleAvailableSubject() {
    this.isAllSelectedAvailableSubject() ?
      this.selectionAvailableTopics.clear() :
      this.availableTopics.data.forEach(row => this.selectionAvailableTopics.select(row));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedAssignedSubject() {
    const numSelected = this.selectionAssignedTopics.selected.length;
    const numRows = this.assignedTopics.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleAssignedSubject() {
    this.isAllSelectedAssignedSubject() ?
      this.selectionAssignedTopics.clear() :
      this.assignedTopics.data.forEach(row => this.selectionAssignedTopics.select(row));
  }

  assignSubject() {
    const selectedElements = this.selectionAvailableTopics.selected;
    this.availableTopics.data = this.availableTopics.data.filter(element => !selectedElements.includes(element));
    this.assignedTopics.data = this.assignedTopics.data.concat(selectedElements);
    this.selectionAvailableTopics.clear();
  }

  unassignSubject() {
    const selectedElements = this.selectionAssignedTopics.selected;
    this.assignedTopics.data = this.assignedTopics.data.filter(element => !selectedElements.includes(element));
    this.availableTopics.data = this.availableTopics.data.concat(selectedElements);
    this.selectionAssignedTopics.clear();
  }

  saveBatchSubject() {
    const SubjectSubjectData = {
      bindid: this.selectedSubject,
      bindtoids: this.assignedTopics.data.map(x => x.topicid)
    };

    this.topicService.saveSubjectTopic(SubjectSubjectData).subscribe(response => {
      console.log('Response:', response);
    }, error => {
      console.error('Error:', error);
    });
  }

  onBatchChange() {
    this.assignedTopics.data = [];
    this.availableTopics.data = this.topics;
    this.topicService.getSubjectTopic(this.selectedSubject).subscribe(
      (data) => {
        this.assignedTopics.data = data;
        const assignedSubjectIds = this.assignedTopics.data.map(ele => ele.topicid);
        const filteredAvailableSubject = this.availableTopics.data.filter(ele => !assignedSubjectIds.includes(ele.topicid));
        this.availableTopics.data = filteredAvailableSubject;
      },
      (error) => {
        console.error('Error fetching batches:', error);
      }
    );
  }

  reset() {
    this.availableTopics.data = this.topics;
    this.selectedSubject = '';
    this.assignedTopics.data = [];
  }
}
