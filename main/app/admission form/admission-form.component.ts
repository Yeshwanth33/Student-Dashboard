import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  namePattern = "[a-zA-Z]*";
  classPattern = "[a-zA-Z0-9]*"

  name = new FormControl('',[
  Validators.required,
  Validators.maxLength(20)
  ]);
  lastName = new FormControl('', [
  Validators.required,
    Validators.maxLength(20)
    ]);
  studentClass = new FormControl('', [
  Validators.required
  ]);
  year = new FormControl('', [
  Validators.required,
  this.yearRangeValidator
  ]);
  percentage = new FormControl('', [
  Validators.required
  ]);

  aadmissionForm = new FormGroup(
     {'name': this.name,
     'lastName': this.lastName,
     'year': this.year,
     'studentClass': this.studentClass,
     'percentage': this.percentage

     });

  constructor() { }

  ngOnInit(): void {

  }

  yearRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if ( control.value > 2017) {
        return { 'maxYear': true };
    }
    return null;
}



}
