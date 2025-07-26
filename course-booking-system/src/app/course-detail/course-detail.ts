import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, } from '@angular/common';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})


export class CourseDetail implements OnInit {
  course: Course | null = null;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idStr = params.get('id');
      if (idStr) {
        this.loadCourseByID(idStr);
      }
    }

    )
  }


  loadCourseByID(id: string): void {
    this.course = null

    if (id == "") {
      return
    }
    let courseID = parseInt(id)

    this.courseService.getCourseByID(courseID).subscribe({
      next: (data: Course) => {
        this.course = data;
      },
      error: (err) => {
        console.error('Error fetching course by ID', err)
      }
    });
  }

}
