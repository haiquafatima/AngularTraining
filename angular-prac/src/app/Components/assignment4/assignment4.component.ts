import { Component, OnInit } from '@angular/core';
import {StudentDetails} from './../../Model/student.model';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
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
    //this.student.push({fname:this.form.value.fname, lname:"sa",  department:"sc" , Age: 56 ,IsValid:true})
   // console.log(this.student);
    this.students.push(this.form.value);
    console.log(this.students);
    this.model = true;
    this.form.reset();
  }
}
