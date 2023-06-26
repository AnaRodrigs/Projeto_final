import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { StudentFormComponent } from './student-form/student-form.component';


const routes: Routes = [
 {path:"student", component: StudentComponent},
 {path : 'studentDetails/:id', component: StudentFormComponent},
 {path : 'creatStudent', component: StudentFormComponent},
 {path: "teacher", component: TeacherComponent},
 {path: "home", component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
