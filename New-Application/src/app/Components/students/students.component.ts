import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentDetails } from 'src/app/Models/StudentDetails.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
student : StudentDetails;
  constructor(private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (res:any) => {
        console.log(res.params);
        this.student = res.params;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
