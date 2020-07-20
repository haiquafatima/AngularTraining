import { Component, OnInit } from '@angular/core';
import {StudentDetails} from './../../Models/StudentDetails.model';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  form : FormGroup;
  students : StudentDetails[]=[];
  model = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fname : [null,Validators.required],
      lname : [],
      age : [null,Validators.max(60)],
      department : [],
      city:[],
      isvalid : [],
    });
   }

  ngOnInit(): void {
  }
  Submit()
  {
    console.log(this.form.value);
    this.students.push(this.form.value);
    console.log(this.students);
    this.model=true;
    this.form.reset();
  }
  View()
  {

  }
}
