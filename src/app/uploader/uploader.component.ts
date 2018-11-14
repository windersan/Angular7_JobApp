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
  userid = 0 ;

  constructor(
    private _route: ActivatedRoute,
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
                console.log("last: " + this.last.id + ' ' + this.userid);
                this.uploaderService.update(this.last,this.userid).subscribe(
                   () => this ,
                    (error: any) => { console.log(error); }
                )
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
    console.log(this._route.snapshot.params);
    this.userid = +this._route.snapshot.params['id'];
    console.log("ngonit->userid->" + this.userid);
  }

}