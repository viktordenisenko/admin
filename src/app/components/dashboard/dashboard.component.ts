import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IResponce} from '../../interfaces/IResponce';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  type = 'line';
  data = {};
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor( private http: HttpClient) { }

  ngOnInit() {
  this.getStats();
  }

  public getStats() {
    this.http.get<IResponce>(environment.apiUrl + '/stats').subscribe(response => {
      if (response.success){
        this.data = response.data;
      }
    });
  }

}
