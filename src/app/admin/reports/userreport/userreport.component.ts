import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData {
  name: string;
  assignedcourse: string;
  email: string;
  completed: string,
  inprogress: string,
  notstarted: string,
}

@Component({
  selector: 'app-userreport',
  templateUrl: './userreport.component.html',
  styleUrls: ['./userreport.component.scss','../styles/reports.scss'],
})

export class UserreportComponent {
  displayedColumns: string[] = ['name', 'assignedcourse', 'email', 'completed', 'inprogress', 'notstarted'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  progress = 75.5;
  count = 0;
  radius = 40;
  space = -8;
  outerStrokeWidth = 8;
  innerStrokeWidth = 8;
  outerStrokeColor = '#35a25b';
  innerStrokeColor = '#d9d9d9';
  imageSrc = 'assets/images/users-three-thin.svg';
  imageHeight = 80;
  imageWidth = 80;
  showImage = true;
  showBackground = false;

  dropdownItems: string[] = ['Action'];

  orgnazations: any = [
    {
      full: "Jan TV",
      short: "Jan TV"
    },
    {
      full: "CSL",
      short: "CSL"
    },
    {
      full: "Jan TV",
      short: "Jan TV"
    },
  ];
  selectedorgnazation: string = "CSL";

  selectedorgnazationControl = new FormControl(this.selectedorgnazation);

  groups: any = [
    {
      full: "Student",
      short: "st"
    },
    {
      full: "Employee",
      short: "em"
    },

  ];
  selectedgroup: string = "em";

  selectedgroupControl = new FormControl(this.selectedgroup);

  constructor() {
    const userData: UserData[] = [
      { name: 'John Doe', assignedcourse: '18', email: 'john@example.com', completed: '10', inprogress: '5', notstarted: '3' },
      { name: 'Harry', assignedcourse: '10', email: 'harry@example.com', completed: '5', inprogress: '3', notstarted: '2' },
      { name: 'Martin', assignedcourse: '8', email: 'martin@example.com', completed: '6', inprogress: '1', notstarted: '1' },
      { name: 'Alice', assignedcourse: '15', email: 'alice@example.com', completed: '8', inprogress: '4', notstarted: '3' },
      { name: 'Garry', assignedcourse: '12', email: 'garry@example.com', completed: '9', inprogress: '2', notstarted: '1' },
      { name: 'Eva', assignedcourse: '14', email: 'eva@example.com', completed: '7', inprogress: '5', notstarted: '2' },
      { name: 'Charlie', assignedcourse: '9', email: 'charlie@example.com', completed: '6', inprogress: '2', notstarted: '1' },
      { name: 'Grace', assignedcourse: '20', email: 'grace@example.com', completed: '12', inprogress: '6', notstarted: '2' },
      { name: 'David', assignedcourse: '13', email: 'david@example.com', completed: '7', inprogress: '4', notstarted: '2' },
      { name: 'Olivia', assignedcourse: '16', email: 'olivia@example.com', completed: '10', inprogress: '5', notstarted: '1' },
      { name: 'Samuel', assignedcourse: '11', email: 'samuel@example.com', completed: '8', inprogress: '2', notstarted: '1' },
      { name: 'Sophia', assignedcourse: '19', email: 'sophia@example.com', completed: '11', inprogress: '6', notstarted: '2' },
      { name: 'Alex', assignedcourse: '17', email: 'alex@example.com', completed: '9', inprogress: '4', notstarted: '4' },
      { name: 'Lily', assignedcourse: '7', email: 'lily@example.com', completed: '5', inprogress: '1', notstarted: '1' },
      { name: 'Matthew', assignedcourse: '22', email: 'matthew@example.com', completed: '14', inprogress: '7', notstarted: '1' },
      { name: 'Emma', assignedcourse: '21', email: 'emma@example.com', completed: '13', inprogress: '5', notstarted: '3' },
      { name: 'Michael', assignedcourse: '23', email: 'michael@example.com', completed: '15', inprogress: '6', notstarted: '2' },
      { name: 'Ava', assignedcourse: '25', email: 'ava@example.com', completed: '18', inprogress: '5', notstarted: '2' },
      { name: 'Benjamin', assignedcourse: '24', email: 'benjamin@example.com', completed: '17', inprogress: '6', notstarted: '1' },
      { name: 'Nathan', assignedcourse: '7', email: 'nathan@example.com', completed: '1', inprogress: '0', notstarted: '6' },
    ];

    this.dataSource = new MatTableDataSource(userData);

    // Connect the data source to the paginator and sort
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

