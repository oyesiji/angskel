import { User } from '../models/user';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RegisterService {

  constructor (private http: Http) {}

  sendUser(user: User) {
    const url = '/user/register';
    const headers1 = new Headers({'Content-Type': 'application/json'});
    return this.http.post(url, JSON.stringify(user), {headers: headers1});
  }

}
