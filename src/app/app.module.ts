import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewallstudentComponent } from './viewallstudent/viewallstudent.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';

const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"addstudent",component:AddstudentComponent
  },
  {
    path:"addfaculty",component:AddfacultyComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    AddstudentComponent,
    ViewallstudentComponent,
    AddfacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
