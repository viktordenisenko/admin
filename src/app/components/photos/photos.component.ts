import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IPhoto} from '../../interfaces/IPhoto';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  public photos: IPhoto [] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPhotos();
  }

  public getPhotos(){
    this.http.get<IPhoto[]>(environment.apiUrl + '/photos').subscribe( res => {
      this.photos = res;
    });
  }
  public deletePhoto(id) {
    this.http.delete(environment.apiUrl + '/photos/' + id).subscribe(_ => {
      this.getPhotos();
    });

  }
}
