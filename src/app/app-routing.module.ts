import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchoolStaffsComponent } from './School/school-staffs/school-staffs.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},

   {path:'home/school-staff', component: SchoolStaffsComponent},
  // {path:'headTeacherWelcome', component: HeadTeacherWelcomeComponent},
  // {path:'visionAndValue', component: VisionAndValueComponent},



  // {path:'acadamicCalender', component: AcadmicCalendarComponent},




// app-school-staffs






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
