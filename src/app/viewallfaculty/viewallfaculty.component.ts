import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallfaculty',
  templateUrl: './viewallfaculty.component.html',
  styleUrls: ['./viewallfaculty.component.css']
})
export class ViewallfacultyComponent implements OnInit {

  constructor() { }

  viewFaculty=[{"name":"Shiny","phno":"8765489765","department":"CSE","dateofjoining":"12.09.2010"},{"name":"GopalRam","phno":"8745098765","department":"ECE","dateofjoining":"05.08.2011"},{"name":"Madhu","phno":"9876547890","department":"CIVIL","dateofjoining":"09.12.2009"},{"name":"Reena","phno":"7898765409","department":"EEE","dateofjoining":"11.07.2015"},{"name":"Reno","phno":"6769870987","department":"MECH","dateofjoining":"03.05.2017"}]

  ngOnInit(): void {
  }

}
