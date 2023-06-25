import { Component } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
teacher: Teacher = {} as Teacher;
teachers : Teacher [] = [];
isEditing : boolean = false;

constructor(private teacherService: TeacherService){}


ngOnInit(): void {
  this.loadTeacher();
 }
 loadTeacher() {
   this.teacherService.getTeachers(). subscribe(
     {
       next : data => this.teachers = data
     }
   );
 }

 onSaveEvent (teacher : Teacher){
   if (this.isEditing)
   {
     this.teacherService.update(teacher).subscribe(
       {
         next: () => {
           this.loadTeacher();
           this.isEditing = false;
         }
       }
     )
   }
   else{
   this.teacherService.save(teacher).subscribe(
     {
       next : data => {
         this.teachers.push(data);

       }
     }
   );
 }
}
edit (teacher : Teacher) {
this.teacher = teacher;
this.isEditing = true;

}

 onCleanEvent (){
 this.isEditing = false;
 }
 delete (teacher : Teacher) {
  this.teacherService.delete(teacher).subscribe({
  next: () => this.loadTeacher()
    })
}
}
