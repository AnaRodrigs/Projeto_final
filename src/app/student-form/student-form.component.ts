import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit{
 
  formGroupClient: FormGroup;
  submitted: boolean= false;
  isEditing : boolean= false;

  constructor(private studentService: StudentService,
    private formBuilder: FormBuilder,  private route: ActivatedRoute,
    private router: Router) {
    this.formGroupClient = formBuilder.group({
      id: [''],
      name:  ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['',[Validators.required, Validators.email]],
      address: [''],
      phone: ['',[Validators.required]],
    });
  }

    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.getStudentById(id);
    }

    getStudentById(id: number) {
      this.studentService.getStudent(id).subscribe({
        next: data =>{
          this.formGroupClient.setValue(data);
          this.isEditing = true;
        }
      });
    }

    save (){
      this.submitted = true 
      if (this.formGroupClient.valid){
        if (this.isEditing){
          this.studentService.update(this.formGroupClient.value).subscribe ({
            next: () => {
              this.router.navigate(['student']);
          }
           })
          }
        else {
          this.studentService.save(this.formGroupClient.value).subscribe(
            {
              next: () => {
                this.router.navigate(['student']);
              }
            }
          )

        }
      }

    }
    get name(): any{
      return this.formGroupClient.get("name");
    }
    get email(): any{
      return this.formGroupClient.get("email");
    }
    get phone(): any{
      return this.formGroupClient.get("phone");
    }

    clean(){
      this.router.navigate(['student'])
    }
  }

  



