import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProcessComponent } from './components/process/process.component';
import { ServicesComponent } from './components/services/services.component';
import { StaffComponent } from './components/staff/staff.component';
import { EmployementComponent } from './components/employement/employement.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'employement', component: EmployementComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginSignupComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProcessComponent,
    ServicesComponent,
    StaffComponent,
    EmployementComponent,
    BlogComponent,
    LoginSignupComponent,
    ContactComponent,
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
