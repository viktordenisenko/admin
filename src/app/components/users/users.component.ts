import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IUser} from '../../interfaces/IUser';
import {IResponce} from '../../interfaces/IResponce';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    public users: IUser[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.http.get<IResponce>(environment.apiUrl + '/users').subscribe(res => {
      this.users = res.users;
    });
  }
  public deleteUser(id) {
    this.http.delete(environment.apiUrl + '/users/' + id).subscribe(_ => {
      this.getUsers();
    });
  }
}
