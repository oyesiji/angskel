import {Injectable} from '@angular/core';
import {Photo} from '../models/photo';
import {Http, Headers} from '@angular/http';
import {User} from '../models/user';

@Injectable()
export class PhotoService {

  constructor (private http: Http) {}

  getPhotos() {
    const url = '/photo/allPhotos';
    return this.http.get(url);
  }

   getPhotoById (photoId: number) {
     const tokenUrl1 = '/rest/photo/photoId';
     const headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
     return this.http.post(tokenUrl1, JSON.stringify(photoId), {headers: headers1});
   }

   getPhotosByUser (user: User) {
     const tokenUrl1 = '/rest/photo/user';
     const headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
     return this.http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
   }

   updatePhoto(photo: Photo) {
     const tokenUrl1 = '/rest/photo/update';
     const headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
     return this.http.post(tokenUrl1, JSON.stringify(photo), {headers: headers1});
   }

}
