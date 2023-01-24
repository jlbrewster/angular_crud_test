import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, find, map, switchMap
 } from 'rxjs/operators';
import { mockProducts } from '../models/mock-products';
import { Product } from '../models/product';
// import { mockProducts } from '../models/mock-products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>; 
  mockProducts: Product[]  = [] 
  productService: any;

  constructor(
    productService: ProductService
  ){}

  ngOnInit(): void {
    // this.products$ = of(this.mockProducts);
    this.getProducts();
  }
  getProducts(): void {
    // this.mockProducts = this.productService.getProducts();
    this.productService.getProducts()
    .subscribe((mockProducts: Product[]) => this.mockProducts = mockProducts)
  }
  // deleteProduct(sku: string):void  {
  //   const deleteItem = this.products$.subscribe(
  //     // mockProducts.find(item => item.sku === sku)
  // )};

  deleteProduct(mockProduct: Product): void {
    this.mockProducts = this.mockProducts.filter(p => p !== mockProduct);
    this.productService.deleteProduct(mockProduct.sku).subscribe();
  }


  
}
