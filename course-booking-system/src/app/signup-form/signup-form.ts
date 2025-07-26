import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../services/course';
import { Course } from '../models/course.model';
import { Student } from  '../models/student.model';

@Component({
  selector: 'app-signup-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css'
})
export class SignupForm implements OnInit{
  signUpForm!: FormGroup;
  submissionSuccess: boolean = false;
  submissionError: string = '';
  courses: Course[] = []
  constructor(private fb: FormBuilder, private courseService: CourseService){

  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['',  [Validators.required, Validators.minLength(3)]],
      email: ['',  [Validators.required, Validators.email]],
      enrolledCourseID: [null, Validators.required]
    })

    this.courseService.getCourses().subscribe({
      next: (data: Course[])=>{
        this.courses = data;
      },
      error: (err) => {
        console.error('Error fetching courses', err)
      }
    });
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get enrolledCourseID() {
    return this.signUpForm.get('enrolledCourseID');
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }

    const newStudent: Student = {
      id: 0,
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      enrolledCourses: [Number(this.signUpForm.value.enrolledCourseID)],
    }

    this.courseService.addStudent(newStudent).subscribe({
      next: (student) => {
        console.log('Signed up', student)
        this.submissionSuccess = true;
        this.signUpForm.reset()
      },
      error: (err) => {
        console.error('Error signing student up', err);
        this.submissionError = " There was an error submitting your sign up, try again";
      }
    })

  }
}
