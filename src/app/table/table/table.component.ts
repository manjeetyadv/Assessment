import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DatePipe } from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';
export interface EmployeeTable {
  name: string;
  position: number;
  salary: number;
  joiningDate: Date;
  lastWorkingDate: Date;
}

const ELEMENT_DATA: EmployeeTable[] = [
  { position: 1, name: 'Manisha', salary: 100000, joiningDate: new Date(2016, 11, 24), lastWorkingDate: new Date(2015, 15, 24) },
  { position: 2, name: 'Akash', salary: 400000, joiningDate: new Date(2018, 18, 24), lastWorkingDate: new Date(2018, 11, 24) },
  { position: 3, name: 'Aakash', salary: 60000, joiningDate: new Date(1993, 6, 12), lastWorkingDate: new Date(1999, 12, 15) },
  { position: 4, name: 'Gagan', salary: 90000, joiningDate: new Date(2001, 7, 6), lastWorkingDate: new Date(2011, 10, 6) },
  { position: 5, name: 'Manjeet', salary: 100000, joiningDate: new Date(2020, 5, 9), lastWorkingDate: new Date(2020, 5, 9) },
  { position: 6, name: 'Abhinav', salary: 500000, joiningDate: new Date(2008, 7, 14), lastWorkingDate: new Date(2008, 7, 14) },
  { position: 7, name: 'Lalit', salary: 600000, joiningDate: new Date(1998, 11, 18), lastWorkingDate: new Date(1998, 11, 18) },
  { position: 8, name: 'Krishna', salary: 7000000, joiningDate: new Date(2002, 2, 24), lastWorkingDate: new Date(2002, 2, 24) },
  { position: 9, name: 'Bunty', salary: 600000, joiningDate: new Date(2006, 4, 29), lastWorkingDate: new Date(2006, 4, 29) },
  { position: 10, name: 'Gaurav', salary: 8000000, joiningDate: new Date(2040, 5, 30), lastWorkingDate: new Date(2040, 5, 30) },
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  ngOnInit() {

  }
  displayedColumns: string[] = ['position', 'name', 'salary', 'joiningDate', 'lastWorkingDate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  pipe: DatePipe;

filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
});

get fromDate() { return this.filterForm.get('fromDate').value; }
get toDate() { return this.filterForm.get('toDate').value; }

  constructor() {
    this.pipe = new DatePipe('en');
    this.dataSource.filterPredicate = (data, filter) =>{
      if (this.fromDate && this.toDate) {
        return data.joiningDate >= this.fromDate && data.joiningDate <= this.toDate;
      }
      return true;
    }
  }

  applyFilter() {
    this.dataSource.filter = ''+Math.random();
  }
}



