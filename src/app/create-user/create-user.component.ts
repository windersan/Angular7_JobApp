import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../models/user.model'; 
import { UserId } from '../models/userId.model'; 
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  newUserForm: FormGroup;
    userId: UserId;

  user: User = 
  {
    "id": 0,
    "login": {
        "username": "init",
        "password": "init"
    },
    "usertype": "applicant",
    "authorization": 1
  };


  



  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newUserForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(): void {

    console.log(this.newUserForm.value);

    this.user.login = this.newUserForm.value;

    console.log(this.newUserForm.value);
    

    this._userService.create(this.user).subscribe((data: UserId) => 
      {
        console.log(data);
        this.userId = data;

        
        this._router.navigate(['newapplicant', data.id]);
        
      }, 
      (error: any) => console.log(error), ()=> console.log('o.0')
    );
    
   
  }

}
