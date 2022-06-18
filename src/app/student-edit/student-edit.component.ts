import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

  onSubmit(formData:NgForm){
    console.log(formData.value);
    this.studentService.saveStudent(formData.value).subscribe((obj)=>{
      console.log(obj);
    });
  }
}
