import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

import { Product } from '../models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>; 
  mockProducts: Product[]  = [] 

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void {
    // this.products$ = of(this.mockProducts);
    this.getProductList();
  }
  getProductList(): void {
    this.productService.getProducts().subscribe((MockProducts: Product[]) => this.mockProducts = MockProducts)
  }

  deleteProduct(mockProduct: Product): void {
    this.mockProducts = this.mockProducts.filter(p => p !== mockProduct);
    this.productService.deleteProduct(mockProduct.sku).subscribe();
  }


  
}
