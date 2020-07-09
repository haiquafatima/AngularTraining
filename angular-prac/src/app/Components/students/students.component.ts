import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  student = [{Fname:'Haiqua' ,Lname : 'Fatima',Age : '22',Department : 'BSCS'},
  {Fname:'Amsa',Lname : 'Maryam',Age : '24',Department : 'MSSE'},
  {Fname:'Rida',Lname : 'Ali',Age : '21',Department : 'BSSE'},
  {Fname:'Wafa',Lname : 'Fatima',Age : '20',Department : 'BSCS'},
  {Fname:'Rabia',Lname : 'Fatima',Age : '20',Department : 'MBBS'}];
  
  model1 = true;
  model2 = false;
  Fname: string;
  Lname : string;
  Age : string;
  Depart : string;
  index= -1;
  constructor() { }

   
  // 
  ngOnInit(): void {
  }

  OnClick(i)
  {
    console.log(i);
    this.model1 = false;
    this.model2 = true;
    this.index = i;
    this.Fname = this.student[i].Fname;
    this.Lname = this.student[i].Lname;
    this.Age = this.student[i].Age;
    this.Depart = this.student[i].Department;
  }
  Close()
  {
    let i = this.index;
    this.model1 = true;
    this.model2 = false;
    this.student[i].Fname = this.Fname;
    this.student[i].Lname = this.Lname;
    this.student[i].Age = this.Age ;
    this.student[i].Department = this.Depart;
  }

}
