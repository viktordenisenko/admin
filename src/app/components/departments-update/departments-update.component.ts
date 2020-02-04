import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IDepartment} from '../../interfaces/IDepartment';
import {ActivatedRoute, Router} from '@angular/router';
import {IResponce} from '../../interfaces/IResponce';

@Component({
  selector: 'app-departments-update',
  templateUrl: './departments-update.component.html',
  styleUrls: ['./departments-update.component.scss']
})
export class DepartmentsUpdateComponent implements OnInit {
  public departments: IDepartment[] = [];
  public  department: Partial<IDepartment> = {};
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.getDepartments();
    this.route.params.subscribe(params => {
      this.initDepartment(params.departmentId);
    });

  }

  public initDepartment(id) {
    this.http.get<IResponce>(environment.apiUrl + '/departments/' + id).subscribe( response => {
      this.department = response.department;
    });
  }

  public getDepartments() {
    this.http.get<IResponce>(environment.apiUrl + '/departments').subscribe( res => {
      this.departments = res.departments;
    });
  }

  public saveDepartment() {
    this.http.put(environment.apiUrl + '/departments/' + this.department._id, this.department).subscribe(_ => {
      this.router.navigate(['/departments']);
    });
  }
}

