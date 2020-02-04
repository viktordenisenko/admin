import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ICategory} from '../../interfaces/ICategory';
import {IResponce} from '../../interfaces/IResponce';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public  categories: ICategory [] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCategories();
  }
  public getCategories() {
    this.http.get<IResponce>(environment.apiUrl + '/categories').subscribe( response => {
      this.categories = response.categories;
    });
  }

  public deleteCategory(id) {
    this.http.delete(environment.apiUrl + '/categories/' + id)
      .subscribe(_ => {
        this.getCategories();
      });
  }

}
