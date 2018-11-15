import { PipeTransform, Pipe } from '@angular/core';
import { Applicant } from "src/app/models/application.model";

@Pipe({
    name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {
    transform(applicants: Applicant[], statusSearch: string): Applicant[]{
        if(!applicants || !statusSearch){
            return applicants;
        }

        return applicants.filter(applicant => {
            if(applicant)
            applicant.applicationStatus.toLowerCase().indexOf(statusSearch.toLowerCase()) !==-1;
        });
    }
}