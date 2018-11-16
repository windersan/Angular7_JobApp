import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service'; 
import { User } from './models/user.model'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'test-one',
  templateUrl: './test-one.component.html',
 // styleUrls: ['./test-one.component.css']
})
export class TestOneComponent implements OnInit {
    initialCount: number = 100;
    numLikes: number = 100;
    title: string = 'wtf';
    isClicked = true;

  constructor(

  ) { }

  
  clickLike(): void {
        this.isClicked = !this.isClicked;
        if(!this.isClicked) ++this.numLikes;
        else
            --this.numLikes;
    }

  ngOnInit() {
    this.numLikes = this.initialCount;
  }



  onSubmit(): void {
  }

}
