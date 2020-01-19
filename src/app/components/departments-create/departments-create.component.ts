import { Component, OnInit } from '@angular/core';
import {IDepartment} from '../../interfaces/IDepartment';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-departments-create',
  templateUrl: './departments-create.component.html',
  styleUrls: ['./departments-create.component.scss']
})
export class DepartmentsCreateComponent implements OnInit {
  public departments: Partial<IDepartment> = {};
  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit() {

  }
  public saveDepartment() {
    this.http.post(environment.apiUrl + '/departments', this.departments).subscribe( _ => {
    this.router.navigate(['/departments']);
    });
  }
}
