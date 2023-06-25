import { Injectable } from '@angular/core';
import { Teacher } from './teacher';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  url= "http://localhost:3000/Teacher";
  constructor(private http: HttpClient)  { }
  
  getTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.url);
   }
   save (teacher : Teacher): Observable<Teacher>{
    return this.http.post<Teacher>(this.url, teacher);
   }
   delete (teacher : Teacher): Observable<void>{
    return this.http.delete<void>(`${this.url}/${teacher.id}`);
   }
   update (teacher : Teacher): Observable<Teacher>{
    return this.http.put<Teacher>(`${this.url}/${teacher.id}`, teacher);
   }
   clean (teacher : Teacher): Observable<void>{
    return this.http.delete<void>(`${this.url}/${teacher.id}`);
   }

}
