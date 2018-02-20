import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {RegisterService} from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

newUser: User = new User();
  registered = false;

  constructor (private registerService: RegisterService) {}


  ngOnInit() {
  }

    onSubmit() {
    console.log('submit test');
    this.registerService.sendUser(this.newUser)
    .subscribe(
      data => {
        this.registered = true;
        this.newUser = new User();
      },
      error => console.log(error)
    );
  }

}
