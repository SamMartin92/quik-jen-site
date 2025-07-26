import { Component, OnInit} from '@angular/core';
import { CourseCard, } from '../course-card/course-card';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-courses-list',
  imports: [CourseCard,],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})

export class CoursesList implements OnInit {
  title: string = 'Courses List';
  courses: Course[] = [];
  wishList: Course[] = [];

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const desc = params.get('description');
      this.loadCourses(desc);
    });
  }
  
  loadCourses(description: string | null){
    this.courseService.getCourses(description).subscribe({
      next: (data: Course[])=>{
        this.courses = data;
      },
      error: (err) => {
        console.error('Error fetching courses', err)
      }
    });
  }

  onCourseBooked(course: Course): void {
  console.log(`Course booked: ${course.title}`);    
  }

  onAddToWishList(course: Course): void {
  this.wishList.push(course);
  }
  }
