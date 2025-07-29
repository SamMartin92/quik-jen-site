import { Component } from '@angular/core';
import { NewCourseForm } from "../new-course-form/new-course-form";
import { StudentList } from '../student-list/student-list';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [NewCourseForm, StudentList, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  viewStudentsActive: boolean = false;
  addCourseActive: boolean = false;


  studentListActive(): void {
    this.addCourseActive = false;
    this.viewStudentsActive= true;
  }

  addCourseFormActive(): void {
    this.viewStudentsActive= false;
    this.addCourseActive = true;
  }
}
