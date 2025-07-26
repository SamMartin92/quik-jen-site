import { CurrencyPipe, DatePipe, } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
  @Input() course?: Course;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() addedToWishList = new EventEmitter<any>();

  constructor(private router: Router) {

  }


  onCourseBooked(): void {
  this.courseBooked.emit(this.course);
  }

  onAddToWishList(): void {
    this.addedToWishList.emit(this.course);
  }

  goToDetails(courseId: number): void {
    this.router.navigate(['/courses', courseId])
  }

}
