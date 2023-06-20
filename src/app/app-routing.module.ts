import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
 {path:"student", component: StudentComponent},
 {path: "teacher", component: TeacherComponent},
 {path: "home", component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
