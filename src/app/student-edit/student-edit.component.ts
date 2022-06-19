import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  message:string='';
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

  onSubmit(formData:NgForm){
   
    this.studentService.saveStudent(formData.value).subscribe((obj)=>{
      this.message=`Student has been successfully saved`;
    });
  }
}
