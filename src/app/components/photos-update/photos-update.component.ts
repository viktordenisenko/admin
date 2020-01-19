import { Component, OnInit } from '@angular/core';
import {IPhoto} from '../../interfaces/IPhoto';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';

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
    this.http.get(environment.apiUrl + '/photos/' + id).subscribe( res => {
      this.photo = res;
    });
  }

  public getPhotos() {
    this.http.get<IPhoto[]>(environment.apiUrl + '/photos').subscribe(res => {
      this.photos = res;
    });
  }

  public updatePhoto() {
    this.http.put(environment.apiUrl + '/photos/' + this.photo._id , this.photo).subscribe( _ => {
      this.router.navigate(['/photos']).then();
    });
  }
}
