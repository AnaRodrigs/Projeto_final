import { Component } from '@angular/core';
import { Student } from '../student';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
 students : Student[] = [];
 
  isEditing: boolean = false;
 
  submitted: boolean = false;

  constructor (private studentService: StudentService, private router : Router){

  }

  ngOnInit(): void {
    this.loadStudents();
   }

   loadStudents() {
     this.studentService.getStudents (). subscribe(
       {
         next : data => this.students= data
       }
     );
   }

   create(){
    this.router.navigate(['creatStudent'])
   }
   
   edit (student : Student){
    this.router.navigate(['studentDetails', student.id])
 
   }
 
   delete (student : Student){
     this.studentService.delete(student).subscribe({
       next : () => this.loadStudents()
     })
  }
 }
 
  

