import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  private baseUrl = 'https://ideal-space-pancake-74gjjrvvwggfw55j-3000.app.github.dev';

  private selectedCourse: Course | null = null;

  setSelectedCourse(course: Course) {
    this.selectedCourse = course;
  }

  getSelectedCourse(): Course | null {
    return this.selectedCourse;
  }


  constructor(private http: HttpClient) {
    // You can fetch courses from a backend API here if needed

  }

  getCourseByID(id: number): Observable<Course>{
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`);
  }

  getCourses(description?: string | null): Observable<Course[]> {
    let url = `${this.baseUrl}/courses`;
    if (description) {
      url += `?description=${description}`;
    }

    return this.http.get<Course[]>(url);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/courses`, course);
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/students`, student)
  }
}
