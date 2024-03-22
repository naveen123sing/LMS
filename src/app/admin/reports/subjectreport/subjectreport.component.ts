import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SubjectreportService } from 'src/assets/services/subjectreport.service';
import { Subject } from 'src/assets/models/subject';


@Component({
  selector: 'app-subjectreport',
  templateUrl: './subjectreport.component.html',
  styleUrls: ['./subjectreport.component.scss', '../styles/reports.scss']
})
export class SubjectreportComponent {
  displayedColumns: string[] = ['serialNumber', 'subjectid', 'subjectcode', 'subjectname', 'subjectdesc', 'archived'];
  dataSource = new MatTableDataSource<Subject>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  progress = 80;
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

  batches: any = [
    {
      full: "2024",
    },
    {
      full: "2023",
    },
    {
      full: "2022",
    },
  ];
  selectedbatch: string = "2022";

  selectedbatchControl = new FormControl(this.selectedbatch);

  courses: any = [
    {
      full: "Chemistry",
      short: "Chem"
    },
    {
      full: "Physics",
      short: "Phy"
    },
    {
      full: "Mathematics",
      short: "Math"
    },

  ];
  selectedcourse: string = "Phy";

  selectedcourseControl = new FormControl(this.selectedcourse);

  constructor(private subjectreportService: SubjectreportService) { }

  ngOnInit(): void {
    this.subjectreportService.getSubjects().subscribe((data: Subject[]) => {
      this.dataSource.data = data;
    });
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
