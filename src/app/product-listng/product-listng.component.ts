import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { categoryEnum } from '../models/enum';

@Component({
  selector: 'app-product-listng',
  templateUrl: './product-listng.component.html',
  styleUrls: ['./product-listng.component.css']
})
export class ProductListngComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
