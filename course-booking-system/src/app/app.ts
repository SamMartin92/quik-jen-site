import { Component, signal } from '@angular/core';
import { CoursesList } from './courses-list/courses-list';
import { CourseDetail } from './course-detail/course-detail';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [CoursesList, CourseDetail, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('course-booking-system');
}
