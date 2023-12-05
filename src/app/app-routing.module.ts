import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchoolStaffsComponent } from './School/school-staffs/school-staffs.component';
import { BehaviourPolicyComponent } from './safeguarding/behaviour-policy/behaviour-policy.component';
import { VisionAndValuesComponent } from './School/vision-and-values/vision-and-values.component';
import { SchoolUniformComponent } from './parent-and-carer-refference/school-uniform/school-uniform.component';
import { ExtendedSchoolProvisionComponent } from './parent-and-carer-refference/extended-school-provision/extended-school-provision.component';
import { SafeguardingAtDenbighComponent } from './safeguarding/safeguarding-at-denbigh/safeguarding-at-denbigh/safeguarding-at-denbigh.component';
import { SchoolAdmissionComponent } from './parent-and-carer-refference/school-admission/school-admission.component';
import { SafeguardingTeamComponent } from './safeguarding/safeguarding-team/safeguarding-team.component';
import { OurStatmentComponent } from './safeguarding/our-statment/our-statment.component';
import { OurTeamComponent } from './safeguarding/our-team/our-team.component';
import { OurPoliciesComponent } from './safeguarding/our-policies/our-policies.component';
import { LinksComponent } from './safeguarding/links/links.component';
import { SchoolDayComponent } from './parent-and-carer-refference/school-day/school-day.component';
import { NewsAndEventsComponent } from './parent-and-carer-refference/news-and-events/news-and-events.component';
import { SchoolContactDetailsComponent } from './parent-and-carer-refference/school-contact-details/school-contact-details.component';
import { AcedemicCalendarComponent } from './parent-and-carer-refference/acedemic-calendar/acedemic-calendar.component';
import { GoverningBodyComponent } from './School/governing-body/governing-body.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'home/school-staff', component: SchoolStaffsComponent },
  { path: 'home/vision-and-values', component: VisionAndValuesComponent },
  { path: 'schoo/school-governance', component: GoverningBodyComponent },
  

  {
    path: 'safeguarding/behaviour-policy',
    component: BehaviourPolicyComponent,
  },
  {
    path: 'safeguarding/overview',
    component: SafeguardingAtDenbighComponent,
  },
  {
    path: 'safeguarding/safeguarding-at-denbigh',
    component: SafeguardingTeamComponent,
  },

  {
    path: 'safeguarding/safeguarding-at-denbigh/our-statment',
    component: OurStatmentComponent,
  },
  {
    path: 'safeguarding/safeguarding-at-denbigh/our-team',
    component: OurTeamComponent,
  },
  {
    path: 'safeguarding/safeguarding-at-denbigh/our-policies',
    component: OurPoliciesComponent,
  },
  {
    path: 'safeguarding/safeguarding-at-denbigh/links',
    component: LinksComponent,
  },

  {
    path: 'parent-and-carer/school-admission',
    component: SchoolAdmissionComponent,
  },

  {
    path: 'parent-and-carer/school-day',
    component: SchoolDayComponent,
  },
  {
    path: 'parent-and-carer/acedemic-calendar',
    component: AcedemicCalendarComponent,
  },

  {
    path: 'parent-and-carer/news-and-events',
    component: NewsAndEventsComponent,
  },

  {
    path: 'parent-and-carer/school-uniform',
    component: SchoolUniformComponent,
  },
  {
    path: 'parent-and-carer/school-contact-details',
    component: SchoolContactDetailsComponent,
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
