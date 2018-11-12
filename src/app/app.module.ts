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


@NgModule({
  declarations: [
    AppComponent,
    ListApplicantsComponent,
    CreateApplicantComponent,
    LoginComponent,
    UploaderComponent
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
