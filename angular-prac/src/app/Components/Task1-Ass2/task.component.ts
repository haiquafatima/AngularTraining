import { Component, OnInit } from "@angular/core";

@Component({
    selector : 'app-Task1',
    template :`<h2>{{Title}}</h2>
    <input #name type="text" [placeholder]="placeolder"/>
    <button (click)="OnClick(name.value)">{{ButtonName}}</button>
    <p><b>{{Name}}</b></p>
    <h3>{{Body}}</h3>`
})

export class Task1Component implements OnInit {
    placeolder = "Enter Name";
    ButtonName = "Print";
    Name="";
    Title = "Inline Template";
    Body = "Task 1 of Assignment 2 has been done.";
    ngOnInit()
    {
        console.log(this.Title);
        console.log(this.Body);
    }
    OnClick(name:string)
    {
        this.Name = name;
    }

}