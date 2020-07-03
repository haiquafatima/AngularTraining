import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2-ass2',
  templateUrl: './task2-ass2.component.html',
  styleUrls: ['./task2-ass2.component.css']
})
export class Task2Ass2Component implements OnInit {
  ButtonTitle="Print Details";
  FName = "Haiqua";
  LName = "Fatima";
  Email = "haiqua.fatima@systemsltd.com";
  Competency = "H - Portals and Mobility";
  Grade = "Software Engineer";
  EndString = "Task 2 of Assignment 2 has been done.";
  constructor() { 
   
  }

  ngOnInit(): void {
  }
printdetails()
{
  
}
}
