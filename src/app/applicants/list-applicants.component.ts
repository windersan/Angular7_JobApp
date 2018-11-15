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
  filteredApplicants: Applicant[];
    

  private _jobSearch: string;
  get jobSearch(): string {
    return this._jobSearch;
  }
  set jobSearch(value: string) {  
    this.filteredApplicants = this.filterByJob(value);
  }
  filterByJob(jobSearch: string): Applicant[]{
     return this.applicants.filter(x => x.job.toLowerCase().indexOf(jobSearch.toLowerCase()) !==-1);   
  }

  private _statusSearch: string;
  get statusSearch(): string {
    return this._statusSearch;
  }
   set statusSearch(value: string) {
    this._statusSearch = value;
    this.filteredApplicants = this.filterByStatus(value);
  }
  filterByStatus(statusSearch: string){
    return this.applicants.filter(applicant => 
            applicant.applicationStatus.toLowerCase().indexOf(statusSearch.toLowerCase()) !==-1);
  }

  constructor(private _applicationService: ApplicationService) { }

  ngOnInit() {
    this._applicationService.getApplicants().subscribe(x => {this.applicants = x;
      this.filteredApplicants = x;
    });
    
    
  }

}
