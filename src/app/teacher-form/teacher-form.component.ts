import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Teacher } from '../teacher';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent {

  @Input()
  teacher : Teacher = {} as  Teacher;
  
  @Output()
  saveEvent = new EventEmitter<Teacher>();
  
  @Output()
  CleanEvent = new EventEmitter<void>();
  
  
  submitted: boolean = false;
  
  formGroupClient: FormGroup;
  
    constructor(private teacherService: TeacherService,
      private formBuilder: FormBuilder) {
      this.formGroupClient = formBuilder.group({
        id: [''],
        email: [''],
        name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        phone: ['',[Validators.required]],
        subject :['',[Validators.required]],
      });
    } 
  
    ngOnChanges(changes: SimpleChanges): void{
      this.formGroupClient.setValue(this.teacher);
    }
    save (){
      this.submitted = true 
      if (this.formGroupClient.valid){
             this.saveEvent.emit(this.formGroupClient.value);
              this.formGroupClient.reset();
              this.submitted = false
          }
    }
    clean() {
      this.CleanEvent.emit();
      this.formGroupClient.reset();
      this.submitted = false;
    }

    get name(): any{
      return this.formGroupClient.get("name");
    }
    get subject(): any{
      return this.formGroupClient.get("subject");
    }
    get phone(): any{
      return this.formGroupClient.get("phone");
    }
  
  }
