import { Component } from '@angular/core';
import { UploaderService } from './uploader.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ResumeId } from '../models/resumeId.model'; 

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  providers: [ UploaderService ]
})
export class UploaderComponent {
  continue = false;
  message: string;
  last: ResumeId;

  constructor(
    private uploaderService: UploaderService,
    private _router: Router
  ) {}

  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
        msg => {
          input.value = null;
          this.message = msg;
          if(msg.includes('completely uploaded')) {
            this.continue = true;
            this.uploaderService.getLast().subscribe(
              x => {
                this.last = x;
                console.log("last: " + this.last.id);
              }
            );
          }
        }
      ); 
    }
  }

  continueClick(){
    this._router.navigate(['login']);
  }

  ngOnInit() {
  }

}