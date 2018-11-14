import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { Applicant } from '../../models/application.model'; 
import { ApplicationService } from '../application.service';


@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

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
    
    this._applicationService.getApplicant(this.applicant.userId).subscribe(x => this.applicant = x);
  
  }

}
