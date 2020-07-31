import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../Student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private apiUrl = 'http://127.0.0.1:5000/';
  private http;
  students: Student[];
  private highestTotal: number;

  constructor(http: HttpClient) {
    this.http = http;

  }

  ngOnInit(): void {
  this.highestTotal = 0;
  this.students = [];

    this.http.get(this.apiUrl).subscribe(data => {

    data.forEach(student => {
      let tempStudent = new Student();
      tempStudent.name = student.name;
      tempStudent.mathsMarks = +student.marks.Maths;
      tempStudent.englishMarks = +student.marks.English;
      tempStudent.scienceMarks = +student.marks.Science;
      tempStudent.rollNo = student.rollNumber;
      tempStudent.total = tempStudent.mathsMarks + tempStudent.scienceMarks + tempStudent.englishMarks;
      this.assignPassOrFail(tempStudent);
      this.students.push(tempStudent);
    })
    this.students.sort((a, b) => a.total > b.total ? -1 : 1);
    this.students[0].status = 'Topper';
    this.students[0].color = 'green';
    this.students.sort((a, b) => a.name > b.name ? 1 : -1);


    });

  }

  assignPassOrFail(student: Student){
  if(student.mathsMarks < 20 || student.scienceMarks < 20 || student.englishMarks < 20){
    student.status = 'Fail';
    student.color = 'red';
  }
  else{
  student.status = 'Pass';
  student.color = 'black';
  }

  }

}
