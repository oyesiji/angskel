import { Component, OnInit } from '@angular/core';
import {Photo} from '../models/photo';
import {UploadPhotoService} from '../services/upload-photo.service';
import {AddPhotoService} from '../services/add-photo.service';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

newPhoto: Photo = new Photo();
  photoAdded = false;
  user: User;

  constructor (private uploadPhotoService: UploadPhotoService, private addPhotoService: AddPhotoService, private userService: UserService, private router: Router) {
    console.log('### Constructor image invoked ');
    console.log('### Constructor image invoked ');
    console.log('### Constructor image invoked ');
  }

  onSubmit() {
    this.userService.getUserByName(localStorage.getItem('currentUserName')).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log(this.user);
        this.newPhoto.user = this.user;
        this.addPhotoService.sendPhoto(this.newPhoto)
        .subscribe(
          data => {
            this.photoAdded = true;
            this.newPhoto = new Photo();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    console.log('### add image invoked ');
    console.log('### add image invoked ');
    console.log('### add image invoked ');
    if (!localStorage.getItem('currentUserName')) {
        this.router.navigate(['/login']);
    }
  }

}
