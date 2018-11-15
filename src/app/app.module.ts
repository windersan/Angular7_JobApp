import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApplicationService } from './applicants/application.service';
import { ListApplicantsComponent } from './applicants/list-applicants.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateApplicantComponent } from './applicants/create-applicant.component';
import { LoginComponent } from './login.component';
import { UploaderComponent } from './uploader/uploader.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ApplicantComponent } from './applicants/applicant/applicant.component';
import { JobFilterPipe } from "src/app/models/job-filter.pipe";
import { StatusFilterPipe } from "src/app/models/status-filter.pipe";


@NgModule({
  declarations: [
    AppComponent,
    ListApplicantsComponent,
    CreateApplicantComponent,
    LoginComponent,
    UploaderComponent,
    CreateUserComponent,
    ApplicantComponent,
    JobFilterPipe,
    StatusFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
