import { Component, OnInit } from '@angular/core';
import {IPhoto} from '../../interfaces/IPhoto';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-photos-create',
  templateUrl: './photos-create.component.html',
  styleUrls: ['./photos-create.component.scss']
})
export class PhotosCreateComponent implements OnInit {

  public photo: Partial <IPhoto> = {};

  constructor( private http: HttpClient,
               private router: Router
               ) { }

  ngOnInit() {
  }

    public savePhoto() {
      this.http.post(environment.apiUrl + '/photos', this.photo).subscribe( _ => {
        this.router.navigate(['/photos']).then();
      });
    }
}
