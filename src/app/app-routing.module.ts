import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchoolStaffsComponent } from './School/school-staffs/school-staffs.component';
import { BehaviourPolicyComponent } from './safeguarding/behaviour-policy/behaviour-policy.component';
import { VisionAndValuesComponent } from './School/vision-and-values/vision-and-values.component';
import { SchoolUniformComponent } from './parent-and-carer-refference/school-uniform/school-uniform.component';
import { ExtendedSchoolProvisionComponent } from './parent-and-carer-refference/extended-school-provision/extended-school-provision.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'home/school-staff', component: SchoolStaffsComponent },
  { path: 'home/vision-and-values', component: VisionAndValuesComponent },

  {
    path: 'safeguarding/behaviour-policy',
    component: BehaviourPolicyComponent,
  },

  {
    path: 'parent-and-carer/school-uniform',
    component: SchoolUniformComponent,
  },
  {
    path: 'parent-and-carer/extended-school-provision',
    component: ExtendedSchoolProvisionComponent,
  },


];

@NgModule({
   imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
