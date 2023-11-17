import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchoolStaffsComponent } from './School/school-staffs/school-staffs.component';
import { BehaviourPolicyComponent } from './safeguarding/behaviour-policy/behaviour-policy.component';
import { VisionAndValuesComponent } from './School/vision-and-values/vision-and-values.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'home/school-staff', component: SchoolStaffsComponent },
  { path: 'home/vision-and-values', component: VisionAndValuesComponent },


  {
    path: 'safeguarding/behaviour-policy',
    component: BehaviourPolicyComponent,
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
