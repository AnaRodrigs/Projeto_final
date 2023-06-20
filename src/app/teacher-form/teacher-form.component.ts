import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Teacher } from '../teacher';
import { FormBuilder, FormGroup } from '@angular/forms';
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
        name: [''],
        phone: [''],
        subject :[''],
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

  
  }
