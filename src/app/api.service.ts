import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewStudent=()=>{
    return this.http.get("http://localhost:8080/viewstudent")
  }

  addStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/studententry",data)
  }
}
