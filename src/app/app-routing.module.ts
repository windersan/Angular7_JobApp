import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListApplicantsComponent } from './applicants/list-applicants.component';
import { LoginComponent } from './login.component';
import { CreateApplicantComponent } from './applicants/create-applicant.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UploaderComponent } from './uploader/uploader.component';

const appRoutes: Routes = [
  { path: 'list', component: ListApplicantsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'newuser', component: CreateUserComponent},
  { path: 'newapplicant/:id', component: CreateApplicantComponent},
  { path: 'upload/:id', component: UploaderComponent},
  //{ path: 'application/:id', component: ApplicationPortalComponent},
  ///{ path: 'resume/:id', component: ResumeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
