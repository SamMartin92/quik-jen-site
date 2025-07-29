import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCourseForm } from './new-course-form/new-course-form';
//import { App } from '../../app';
import { StudentList } from './student-list/student-list';
import { Dashboard } from './dashboard/dashboard';


const routes: Routes = [
  {
    path: '', component: Dashboard,

    children: [
      {
        path: 'new-course', component: NewCourseForm,
      },
      {
        path: 'student-list', component: StudentList,
      },
      {
        path: '', redirectTo: 'student-list', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
