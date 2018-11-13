import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { Applicant } from '../models/application.model'; 
import { ApplicationService } from './application.service';

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.css']
})
export class CreateApplicantComponent implements OnInit {

  applicantForm: FormGroup;
  applicant: Applicant = 
  {
    "id": 0,
    "userId": 0,
    "resumeId": 1,
    "salary": 0,
    "firstName": "",
    "lastName": "",
    "gender": "",
    "dateApplied": new Date(),
    "job": "",
    "address": "",
    "city": "",
    "state": "",
    "zip": 0,
    "applicationStatus" : "New"
}

  constructor(
    private _route: ActivatedRoute,
    private _applicationService: ApplicationService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.applicant.userId = +this._route.snapshot.params['id'];
    console.log('found: ' + this.applicant.userId);
    this.applicantForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    });
  }

  onSubmit(): void {

    console.log(this.applicantForm.value);

    this.applicant.firstName = this.applicantForm.value.firstName;
    this.applicant.lastName = this.applicantForm.value.lastName;
    
    

    this._applicationService.postApplication(this.applicant).subscribe((data: Applicant) => 
      {
        console.log(data);
        //this.userId = data;
        
        this._router.navigate(['upload', this.applicant.id]);
        
      }, 
      (error: any) => console.log(error), ()=> console.log('o.0')
    );
  }

}
