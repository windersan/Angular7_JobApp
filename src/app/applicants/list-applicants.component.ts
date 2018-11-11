import { Component, OnInit } from '@angular/core';
import { Applicant } from '../models/application.model';
import { ApplicationService } from './application.service';

@Component({
  selector: 'app-list-applicants',
  templateUrl: './list-applicants.component.html',
  styleUrls: ['./list-applicants.component.css']
})
export class ListApplicantsComponent implements OnInit {

  applicants: Applicant[];

  constructor(private _applicationService: ApplicationService) { }

  ngOnInit() {
    this.applicants = this._applicationService.getApplicants();
  }

}
