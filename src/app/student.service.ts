import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url= "http://localhost:3000/Student";
  constructor() { }
}
