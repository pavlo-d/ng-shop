import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { categoryEnum } from './models/enum';
import { ProductsService } from './services/productservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Shop';
  products: Array<Product>;
  productsBasket: Array<Product> = [];

  constructor(private productsService: ProductsService) {
    this.productsBasket = [];
    this.products = [];
  }
  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
  buyProduct(product: any) {
    this.productsBasket.push(product);
  }
  removeBuyProduct(product: any) {
    let index = this.productsBasket.indexOf(product);
    if (index > -1) {
      this.productsBasket.splice(index, 1);
    }
    
  }
}
