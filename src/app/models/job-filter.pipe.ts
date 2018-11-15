import { PipeTransform, Pipe } from '@angular/core';
import { Applicant } from "src/app/models/application.model";

@Pipe({
    name: 'jobFilter'
})
export class JobFilterPipe implements PipeTransform {
    transform(applicants: Applicant[], jobSearch: string): Applicant[]{
        if(!applicants || !jobSearch){
            return applicants;
        }

        return applicants.filter(applicant => 
            applicant.job.toLowerCase().indexOf(jobSearch.toLowerCase()) !==1);

    }
}