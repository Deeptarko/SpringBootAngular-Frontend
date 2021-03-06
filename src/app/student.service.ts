import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteResponse } from "./interfaces/delete-response";
import { Student } from "./interfaces/student";
import { StudentSave } from "./interfaces/studentSave";


@Injectable({providedIn:'root'})
export class StudentService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private http:HttpClient){}

  getStudents():Observable<Student[]>{
    return this.http.get<Student[]>(`http://studentmanagementapp-env.eba-2fajet5v.us-east-1.elasticbeanstalk.com/api/students`);
  }

  saveStudent(student:StudentSave):Observable<Object>{
    return this.http.post(`http://studentmanagementapp-env.eba-2fajet5v.us-east-1.elasticbeanstalk.com/api/saveStudent`,student,this.httpOptions);
  }

  deleteStudent(studentId:number):Observable<DeleteResponse>{
    return this.http.delete<DeleteResponse>(`http://studentmanagementapp-env.eba-2fajet5v.us-east-1.elasticbeanstalk.com/api/${studentId}`,this.httpOptions);
  }
  updateStudent(studentId:number,student:StudentSave):Observable<Student>{
    return this.http.put<Student>(`http://studentmanagementapp-env.eba-2fajet5v.us-east-1.elasticbeanstalk.com/api/${studentId}`,student,this.httpOptions);
  }

}
