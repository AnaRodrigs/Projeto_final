import { Component } from '@angular/core';
import { Student } from '../student';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
 students : Student[] = [];
 
isEditing: boolean = false;
  formGroupClient: FormGroup;
  isChecked: boolean = false; 

  constructor(private studentService: StudentService,
    private formBuilder: FormBuilder) {
    this.formGroupClient = formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      address: [''],
      phone: [''],
    });
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
 
 
   save (){
   this.isChecked = true;
   if (this.formGroupClient.valid)
   {
    if (this.isEditing)
    {
      this.studentService.update(this.formGroupClient.value).subscribe(
        {
          next: () => {
            this.loadStudents();
            this.formGroupClient.reset();
            this.isEditing = false;
            this.isChecked = false;
          }
        }
      )
    }
    else{
    this.studentService.save(this.formGroupClient.value).subscribe(
      {
        next : data => {
          this.students.push(data)
          this.formGroupClient.reset();
          this.isChecked = false;

        }
      }
    );
  }
}

   }
   
   edit (student : Student){
      this.formGroupClient.setValue(student);
      this.isEditing = true;
 
   }
 
   delete (student : Student){
     this.studentService.delete(student).subscribe({
       next : () => this.loadStudents()
     })
 
 }
   clean (){
   this.formGroupClient.reset();
   this.isEditing = false;
   }
   
 }
 
  

