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

constructor(private teacherService: TeacherService){}


}
