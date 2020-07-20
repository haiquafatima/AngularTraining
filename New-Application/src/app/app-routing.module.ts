import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { LoginComponent } from './Components/login/login.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentsComponent } from './Components/students/students.component';


const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"login"},
  {path:"home",component: HomeComponent},
  {path:"about-us", component:AboutUsComponent},
  {path:"login", component:LoginComponent},
  {path:"students",component:StudentsComponent},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
