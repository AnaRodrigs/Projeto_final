import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url= "http://localhost:3000/Teacher";
  constructor() { }
}
