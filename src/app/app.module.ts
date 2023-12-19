import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QuickLinksComponent } from './home/quick-links/quick-links.component';
import { SubHeaderComponent } from './header-footer/sub-header/sub-header.component';
import { SchoolStaffsComponent } from './School/school-staffs/school-staffs.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BehaviourPolicyComponent } from './safeguarding/behaviour-policy/behaviour-policy.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { VisionAndValuesComponent } from './School/vision-and-values/vision-and-values.component';
import { SchoolUniformComponent } from './parent-and-carer-refference/school-uniform/school-uniform.component';
import { ExtendedSchoolProvisionComponent } from './parent-and-carer-refference/extended-school-provision/extended-school-provision.component';
import { SafeguardingAtDenbighComponent } from './safeguarding/safeguarding-at-denbigh/safeguarding-at-denbigh/safeguarding-at-denbigh.component';
import { SchoolAdmissionComponent } from './parent-and-carer-refference/school-admission/school-admission.component';
import { GoverningBodyComponent } from './School/governing-body/governing-body.component';
import { SafeguardingTeamComponent } from './safeguarding/safeguarding-team/safeguarding-team.component';
import { OurStatmentComponent } from './safeguarding/our-statment/our-statment.component';
import { OurTeamComponent } from './safeguarding/our-team/our-team.component';
import { OurPoliciesComponent } from './safeguarding/our-policies/our-policies.component';
import { LinksComponent } from './safeguarding/links/links.component';
import { SchoolDayComponent } from './parent-and-carer-refference/school-day/school-day.component';
import { NewsAndEventsComponent } from './parent-and-carer-refference/news-and-events/news-and-events.component';
import { SchoolContactDetailsComponent } from './parent-and-carer-refference/school-contact-details/school-contact-details.component';
import { AcedemicCalendarComponent } from './parent-and-carer-refference/acedemic-calendar/acedemic-calendar.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HeadTeacherWelcomeComponent } from './School/head-teacher-welcome/head-teacher-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuickLinksComponent,
    SubHeaderComponent,
    SchoolStaffsComponent,
    BehaviourPolicyComponent,
    VisionAndValuesComponent,
    SchoolUniformComponent,
    ExtendedSchoolProvisionComponent,
    SafeguardingAtDenbighComponent,
    SchoolAdmissionComponent,
    GoverningBodyComponent,
    SafeguardingTeamComponent,
    OurStatmentComponent,
    OurTeamComponent,
    OurPoliciesComponent,
    LinksComponent,
    SchoolDayComponent,
    NewsAndEventsComponent,
    SchoolContactDetailsComponent,
    AcedemicCalendarComponent,
    HeadTeacherWelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule
  ],
  // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],

  bootstrap: [AppComponent],
})
export class AppModule {}
