import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QuickLinksComponent } from './home/quick-links/quick-links.component';
import { SubHeaderComponent } from './header-footer/sub-header/sub-header.component';
import { SchoolStaffsComponent } from './School/school-staffs/school-staffs.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuickLinksComponent,
    SubHeaderComponent,
    SchoolStaffsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
