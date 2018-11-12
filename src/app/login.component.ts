import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service'; 
import { User } from './models/user.model'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(): void {

    console.log(this.loginForm.value);

    this._authService.authenticate(this.loginForm.value).subscribe(x => 
      {
        this.user = x;
        if(x.authorization == 2)this._router.navigate(['list']);
        if(x.authorization == 1)this._router.navigate(['list']);///['applicant/<returnObjectid>']
      }, 
      (error: any) => console.log(error), ()=> console.log('o.0')
    );
    
   
  }

}
