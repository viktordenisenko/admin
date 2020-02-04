import { Component, OnInit } from '@angular/core';
import {IPhoto} from '../../interfaces/IPhoto';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {IResponce} from '../../interfaces/IResponce';

@Component({
  selector: 'app-photos-update',
  templateUrl: './photos-update.component.html',
  styleUrls: ['./photos-update.component.scss']
})
export class PhotosUpdateComponent implements OnInit {
  public photo: Partial <IPhoto> = {};
  public photos: IPhoto[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPhotos();
    this.route.params.subscribe(params => {
      this.initPhoto(params.photoId);
    });

  }

  public initPhoto(id) {
    this.http.get<IResponce>(environment.apiUrl + '/photos/' + id).subscribe( res => {
      this.photo = res.photo;
    });
  }

  public getPhotos() {
    this.http.get<IResponce>(environment.apiUrl + '/photos').subscribe(res => {
      this.photos = res.photos;
    });
  }

  public updatePhoto() {
    this.http.put(environment.apiUrl + '/photos/' + this.photo._id , this.photo).subscribe( _ => {
      this.router.navigate(['/photos']).then();
    });
  }
}
