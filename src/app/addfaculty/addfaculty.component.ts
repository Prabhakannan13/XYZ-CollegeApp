import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor() { }
  name=""
  department=""
  designation=""
  dob=""
  educationqualification=""
  address=""
  mobno=""
  dateofjoining=""

readValues=()=>{
  let data={
    "name":this.name,
    "department":this.department,
    "designation":this.designation,
    "dob":this.dob,
    "educationqualification":this.educationqualification,
    "address":this.address,
    "mobno":this.mobno,
    "dateofjoining":this.dateofjoining

  }
  console.log(data)
  
}
  ngOnInit(): void {
  }

}
