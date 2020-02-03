import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IResponce} from '../../interfaces/IResponce';
import {LocalStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginData = {
    email: '',
    password: ''
  };
  public  errorMessage: string = '';
  public validationErrors: any[] = [];

  constructor(
    private http: HttpClient,
    private ls: LocalStorageService,
    private router: Router

  ) { }

  ngOnInit() {


  }

  public login() {
  this.errorMessage = '';
  this.validationErrors = [];
  this.http.post<IResponce>(environment.apiUrl + '/auth/login', this.loginData).subscribe( response => {
      console.log(response);
      if (response.success) {
          this.ls.store('token', response.token);
          this.ls.store('user', response.user);
          this.router.navigate(['/']);
      } else {
        this.errorMessage = response.message || '';
        this.validationErrors = response.errors || [];
      }
    });

  }

}
