import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service'; 
import { User } from './models/user.model'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value);

    this._authService.authenticate(this.loginForm.value).subscribe(x => this.user = x, 
      (error: any) => console.log(error));

   //if returnObject.authorization==2, this._router.navigate(['list'])
   //else if returnObject.authorization==1, this._router.navigate(['applicant/<returnObjectid>'])
  }

}
