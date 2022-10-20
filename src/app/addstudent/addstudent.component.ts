import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }

      name=""
      rollno=""
      admissionno=""
      college=""
      department=""
      dob=""
      bloodgroup=""
      parentname=""
      parentemailid=""
      gaurdianname=""
      gaurdianaddress=""

      status:boolean=false

      readValues=()=>{
        let data ={
          "name":this.name,
          "rollno":this.rollno,
          "admissionno":this.admissionno,
          "college":this.college,
          "department":this.department,
          "dob":this.dob,
          "bloodgroup":this.bloodgroup,
          "parentname":this.parentname,
          "parentemailid":this.parentemailid,
          "gaurdianname":this.gaurdianname,
          "gaurdianaddress":this.gaurdianaddress
        }
        console.log(data)
        this.myapi.addStudent(data).subscribe(
          (res)=>{
            alert("Added")
          }
        )

        this.status=true
      }
  ngOnInit(): void {
  }

}
