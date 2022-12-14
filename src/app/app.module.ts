import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProcessComponent } from './components/process/process.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { UpperNavComponent } from './components/upper-nav/upper-nav.component';
import { WedoComponent } from './components/wedo/wedo.component';
import { ChangecardComponent } from './components/changecard/changecard.component';
import { ConsultButtonComponent } from './components/consult-button/consult-button.component';
import { OurOfferComponent } from './components/our-offer/our-offer.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { BorderBarComponent } from './components/border-bar/border-bar.component';
import { OverallOrganizationComponent } from './components/overall-organization/overall-organization.component';
import { TechDepartmentsComponent } from './components/tech-departments/tech-departments.component';
import { SalesComponent } from './components/sales/sales.component';
import { OnStaffComponent } from './components/on-staff/on-staff.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ProjectExamplesComponent } from './components/project-examples/project-examples.component';
import { ReviewCarouselComponent } from './components/review-carousel/review-carousel.component';
import { GetStartedFormComponent } from './components/get-started-form/get-started-form.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'staff', component: OnStaffComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginSignupComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'it', component: TechDepartmentsComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'form', component: GetStartedFormComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProcessComponent,
    BlogComponent,
    LoginSignupComponent,
    ContactComponent,
    UpperNavComponent,
    WedoComponent,
    ChangecardComponent,
    ConsultButtonComponent,
    OurOfferComponent,
    EmploymentComponent,
    BorderBarComponent,
    OverallOrganizationComponent,
    TechDepartmentsComponent,
    SalesComponent,
    OnStaffComponent,
    OurServicesComponent,
    ProjectExamplesComponent,
    ReviewCarouselComponent,
    GetStartedFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
