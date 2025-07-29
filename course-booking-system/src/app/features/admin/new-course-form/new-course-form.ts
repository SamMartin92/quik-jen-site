import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-course-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-course-form.html',
  styleUrl: './new-course-form.css'
})
export class NewCourseForm implements OnInit {
  addCourseForm!: FormGroup;
  submissionSuccess: boolean = false;
  submissionError: string = '';
  courses: Course[] = []
  constructor(private fb: FormBuilder, private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.addCourseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],
      img: [''],
      onSale: [false]
    })

    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (err) => {
        console.error('Error fetching courses', err)
      }
    });
  }

  get title() {
    return this.addCourseForm.get('title');
  }

  get description() {
    return this.addCourseForm.get('description');
  }

  get price() {
    return this.addCourseForm.get('price');
  }

  get date() {
    return this.addCourseForm.get('date');
  }

  get img() {
    return this.addCourseForm.get('img');
  }

  get onSale() {
    return this.addCourseForm.get('onSale');
  }

  onSubmit(): void {
    if (this.addCourseForm.invalid) {
      return;
    }

    const newCourse: Course = {
      id: 0,
      title: this.addCourseForm.value.title,
      description: this.addCourseForm.value.description,
      price: this.addCourseForm.value.price,
      img: this.addCourseForm.value.img,
      onSale: this.addCourseForm.value.onSale,
      soldOut: false
    }

    this.courseService.addCourse(newCourse).subscribe({
      next: (course) => {
        console.log('Course added', course)
        this.submissionSuccess = true;
        this.addCourseForm.reset()
      },
      error: (err) => {
        console.error('Error adding course', err);
        this.submissionError = " There was an error submitting your sign up, try again";
      }
    })
  }
}
