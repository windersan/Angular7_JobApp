import { Component, OnInit } from '@angular/core';
import { Applicant } from '../models/application.model';
import { Status } from '../models/status.model';
import { ApplicationService } from './application.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-list-applicants',
  templateUrl: './list-applicants.component.html',
  styleUrls: ['./list-applicants.component.css']
})
export class ListApplicantsComponent implements OnInit {

  applicants: Applicant[];
  filteredApplicants: Applicant[];
  applicant: Applicant;
  statusForm: FormGroup;
  statusModel: Status;

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

  update(i: number){
    console.log(this.statusForm.value);
    console.log("i: " + i);
    console.log("userId: " + this.applicants[i].userId);

    this.applicants[i].applicationStatus = this.statusForm.value.status;

    this.updateStatus(this.statusForm.value, this.applicants[i].userId).subscribe(
      () => {console.log("updateStatus called")},
       (error: any) => console.log(error), ()=> console.log('o.0')
    );

  }

  constructor(private _applicationService: ApplicationService, private httpClient: HttpClient) { }

  ngOnInit() {
    this._applicationService.getApplicants().subscribe(x => {this.applicants = x;
      this.filteredApplicants = x;
    });
    
    this.statusForm = new FormGroup({
      status: new FormControl()
    });
    
  }
  
  
  updateStatus(status: Status, userid: number):  Observable<void>{
    console.log('update status called');
    
    //this.statusModel = new Status();
    //this.statusModel.status = status;
    
     var str = 'http://arctrade.azurewebsites.net/api/status/' + userid;
     return this.httpClient.put<void>(str,status,{
       headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
     });
  }

  // this.updateStatus(this.statusForm.value).subscribe(x => 
  //     {
  //       this.user = x;
  //       if(x.authorization == 2)this._router.navigate(['list']);
  //       if(x.authorization == 1)this._router.navigate(['applicant',this.user.id]);///['applicant/<returnObjectid>']
  //     }, 
  //     (error: any) => console.log(error), ()=> console.log('o.0')
  //   );

}
