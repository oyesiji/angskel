import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

import {UploadPhotoService} from './services/upload-photo.service';
import {AddPhotoService} from './services/add-photo.service';
import {UserService} from './services/user.service';
import {LoginService} from './services/login.service';
import {PhotoService} from './services/photo.service';
import {CommentService} from './services/comment.service';
import {RegisterService} from './services/register.service';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { routing } from './app.routing';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MyAlbumComponent } from './my-album/my-album.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageCommentsComponent } from './image-comments/image-comments.component';
import { PhotoRowComponent } from './photo-row/photo-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanelComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    MyAlbumComponent,
    AddPhotoComponent,
    ImageDetailComponent,
    ImageCommentsComponent,
    PhotoRowComponent
  ],
  imports: [
    BrowserModule, HttpModule, routing, FormsModule
  ],
  providers: [PhotoService, RegisterService, LoginService, UserService, AddPhotoService, UploadPhotoService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
