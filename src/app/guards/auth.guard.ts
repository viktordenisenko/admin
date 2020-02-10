import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IResponce} from '../interfaces/IResponce';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private ls: LocalStorageService,
    private router: Router,
    private http: HttpClient

  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise(async (resolve) => {
          this.http.get<IResponce>(environment.apiUrl + '/auth/check').subscribe( res => {
            if (res.success) {
              this.ls.store('user', res.user);
              resolve(true);
            } else {
              this.router.navigate(['/login']);
              resolve(false);
            }
          });
      });

  }
}
