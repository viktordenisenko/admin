import { Component, OnInit } from '@angular/core';
import {IUser} from '../../interfaces/IUser';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  public user: Partial<IUser> = {};

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit() {
  }

  public saveUser() {
    this.http.post(environment.apiUrl + '/users', this.user).subscribe(_ => {
      this.router.navigate(['/users']).then();
    });
  }

}
