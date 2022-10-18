import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallstudent',
  templateUrl: './viewallstudent.component.html',
  styleUrls: ['./viewallstudent.component.css']
})
export class ViewallstudentComponent implements OnInit {

  constructor() { }

viewData=[{"name":"Prabha","rollno":"01","department":"CSE","dob":"13-05-2001"},{"name":"Amsha","rollno":"02","department":"CSE","dob":"14-10-2001"},{"name":"Niranjana","rollno":"03","department":"CSE","dob":"12-06-2001"},{"name":"Harshini","rollno":"04","department":"ECE","dob":"12-04-2001"},{"name":"Janet","rollno":"05","department":"EEE","dob":"12-11-2001"}]

  ngOnInit(): void {
  }

}
