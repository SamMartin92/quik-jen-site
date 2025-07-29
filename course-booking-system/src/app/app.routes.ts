import { Routes } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';
import { CourseDetail } from './course-detail/course-detail';
import { About } from './about/about';
import { SignupForm } from './signup-form/signup-form';


export const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: 'courses', component: CoursesList },
    { path: 'courses/:id', component: CourseDetail },
    { path: 'about', component: About },
    { path: 'signup', component: SignupForm },
    { path: 'admin' ,
        loadChildren: () => import('./features/admin/admin-module').then(m => m.AdminModule)
    },
];
