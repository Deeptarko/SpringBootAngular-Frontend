import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css'],
})
export class StudentDisplayComponent implements OnInit {
  studentArr: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((student) => {
      this.studentArr=student;
     
    });
  }

}
