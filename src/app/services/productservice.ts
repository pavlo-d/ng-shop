import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { categoryEnum } from '../models/enum';

@Injectable()
export class ProductsService {
    products: Array<Product>;
    getProducts() {
        return this.products;
    }
    constructor() {
        this.products = [
            { name: 'Milk', description: 'Description 1', price: 1, category: categoryEnum.category1, isAvailable: true },
            { name: 'Juice', description: 'Description 2', price: 2, category: categoryEnum.category1, isAvailable: true },
            { name: 'Product 3', description: 'Description 3', price: 31, category: categoryEnum.category2, isAvailable: false },
        ];
    }
}
