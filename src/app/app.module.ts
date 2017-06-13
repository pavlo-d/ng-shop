import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListngComponent } from './product-listng/product-listng.component';
import { ProductsService } from './services/productservice';


@NgModule({
  declarations: [
    AppComponent,
    ProductListngComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
