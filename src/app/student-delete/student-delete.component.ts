import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  message:string='';
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }
  onSubmit(formData:NgForm){
     
      this.studentService.deleteStudent(formData.value.studentId).subscribe((responseObj)=>{
        this.message=responseObj.message;
      });
  }

}
