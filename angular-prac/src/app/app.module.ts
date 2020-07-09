import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContentComponent } from './Components/content/content.component';
import { Task1Component } from './Components/Task1-Ass2/task.component';
import { Task2Ass2Component } from './Components/task2-ass2/task2-ass2.component';
import { StudentsComponent } from './Components/students/students.component';
import { FormsModule } from '@angular/forms'; //Use For Modal;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    Task1Component,
    Task2Ass2Component,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
