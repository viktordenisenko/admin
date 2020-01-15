import { Component, OnInit } from '@angular/core';
import {ICategory} from "../../interfaces/ICategory";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.scss']
})
export class CategoriesUpdateComponent implements OnInit {



  constructor(
    private http: HttpClient

  ) { }

  ngOnInit() {

  }


}
