import { Component, OnInit} from '@angular/core';
import { CourseCard, } from '../course-card/course-card';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCard,],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList implements OnInit {
  title: string = 'Courses List';
  courses = [
    { id: 1, title: 'Angular Basics', description: 'Learn the basics of Angular framework.' , price: 100 , date: '02/08/2025', soldOut: false, img: 'ang-logo.png'},
    { id: 2, title: 'Advanced Angular', description: 'Deep dive into advanced Angular concepts.', price: 150 , date: '02/08/2025', soldOut: true, img: 'ang-logo.png'},
    { id: 3, title: 'Angular Testing', description: 'Master testing in Angular applications.', price: 120 , date: '02/08/2025', soldOut: false, img: 'ang-logo.png'},
    { id: 4, title: 'Angular Performance', description: 'Optimize your Angular applications for better performance.', price: 130 , date: '02/08/2025', soldOut: false, img: 'ang-logo.png'}
   ];

   wishList: any[] = [];

   ngOnInit(): void {
    console.log('CoursesList component initialized');
   }
   
   onCourseBooked(course: any): void {
    console.log(`Course booked: ${course.title}`);    
   }

   onAddToWishList(course: any): void {
    this.wishList.push(course.title);
   }
  }
