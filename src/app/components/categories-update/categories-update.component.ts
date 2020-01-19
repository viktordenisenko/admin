import { Component, OnInit } from '@angular/core';
import {ICategory} from '../../interfaces/ICategory';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.scss']
})
export class CategoriesUpdateComponent implements OnInit {

  public category: Partial<ICategory> = {};

  constructor( private http: HttpClient,
               private route: ActivatedRoute,
               private router: Router
               ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.initCategory(params.categoryId);
    });

  }
  public initCategory(id) {
    this.http.get<ICategory>(environment.apiUrl + '/categories/' + id).subscribe(response => {
      this.category = response;
      console.log(this.category);
    });
  }
  public updateCategory() {
    this.http.put(environment.apiUrl + '/categories/' + this.category._id, this.category).subscribe(_ => {
      this.router.navigate(['/categories']);
    });
  }


}
