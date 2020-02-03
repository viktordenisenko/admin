import { Component, OnInit } from '@angular/core';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import {IUser} from '../../interfaces/IUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @LocalStorage('user')
  user: IUser ;

  constructor( private ls: LocalStorageService,
               private router: Router) { }

  ngOnInit() {
  }

  public logout() {
    this.ls.clear('token');
    this.ls.clear('user');
    this.router.navigate([('/login')]);

  }

}
