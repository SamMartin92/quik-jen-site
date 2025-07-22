import { CurrencyPipe, DatePipe, } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
  @Input() course: any;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() addedToWishList = new EventEmitter<any>();

  onCourseBooked(): void {
  this.courseBooked.emit(this.course);
  }

  onAddToWishList(): void {
    this.addedToWishList.emit(this.course);
  }

}
