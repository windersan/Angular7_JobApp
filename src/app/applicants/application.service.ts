import { Injectable } from '@angular/core';
import { Applicant } from '../models/application.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private applicants: Applicant[] = [
    {
        id: 2,
        userId: 1,
        resumeId: 1,
        salary: 40000,
        firstName: "andres",
        lastName: "castro",
        gender: "male",
        dateApplied: new Date('11/10/2018'),
        job: "software engineer",
        address: "4145 porte de merano",
        city: "san diego",
        state: "ca",
        zip: 92122
    }
  ];



  constructor(private httpClient: HttpClient) { }

  getApplicants(): Observable<Applicant[]>{
    return this.httpClient.get<Applicant[]>('http://localhost:1337/api/manage/1');
  }


}
