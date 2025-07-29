import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student.model';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {
  students: Student[] =[];
  courses: Course[] = [];
  errorMsg: String = "";
  loading: boolean = false;

  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.fetchStudents();
    this.fetchCourses();
  }

  fetchStudents(): void {
    this.loading= true;
    this.courseService.getStudents().subscribe({
      next: (data: Student[]) => {
        this.students = data;
        this.loading = false
      },
      error: (err: any) => {
        console.error("Error fetching students", err);
        this.errorMsg = "Failed to load students. Hard luck...";
        this.loading = false;
      }
    })
  }

  fetchCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (err: any) => {
        console.error("Error fetching courses", err);
        this.errorMsg = "Failed to load students. Hard luck...";
      }
    })
  }


  getCourseTitle(courseID: number): string {
    const course = this.courses.find(c => c.id == courseID)
    return course? course.title : "Unknown course";
  }
}
