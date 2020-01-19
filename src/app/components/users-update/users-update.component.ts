import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {IUser} from '../../interfaces/IUser';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss']
})
export class UsersUpdateComponent implements OnInit {

    public users: IUser[] = [];
    public user: Partial <IUser> = {};

  constructor( private http: HttpClient,
               private router: Router,
               private route: ActivatedRoute

               ) { }

  ngOnInit() {
    this.getUsers();
    this.route.params.subscribe( params => {
      this.initUser(params.userId);
    });

  }

  public initUser(id) {
    this.http.get(environment.apiUrl + '/users/' + id).subscribe( res => {
      this.user = res;
    });
  }

  public getUsers() {
    this.http.get<IUser[]>(environment.apiUrl + '/users').subscribe( res => {
      this.users = res;
    });
  }
  public saveUser() {
    this.http.put<IUser>(environment.apiUrl + '/users/' + this.user._id, this.user).subscribe( _ => {
      this.router.navigate(['/users']).then();
    });
  }
}
