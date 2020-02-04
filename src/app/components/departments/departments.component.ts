import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IDepartment} from '../../interfaces/IDepartment';
import {IResponce} from '../../interfaces/IResponce';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
    public departments: IDepartment [] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDepartments();
  }

  public getDepartments() {
    this.http.get<IResponce>(environment.apiUrl + '/departments').subscribe(res => {
      this.departments = res.departments;
    });
  }

  public deleteDepartment(id) {
    this.http.delete(environment.apiUrl + '/departments/' + id).subscribe(_ => {
      this.getDepartments();
    });
  }

}
