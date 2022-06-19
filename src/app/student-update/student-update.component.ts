import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  message:String='';
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }
  onSubmit(formData:NgForm){
    let studentId=formData.value.studentId;
    let newStudentObj={
      studentName:formData.value.studentName,
      studentCollege:formData.value.studentCollege,
      studentPercentage:formData.value.studentPercentage
    }
    this.studentService.updateStudent(studentId,newStudentObj).subscribe((obj)=>{
      this.message=`The student with the id ${studentId} has been updated successfully`;
    })
  }

}
