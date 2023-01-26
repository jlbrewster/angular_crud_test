import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const sku = this.route.snapshot.paramMap.get('sku')!;
    console.log("sku: ", sku);
    this.productService.getProductBySku(sku)
      .subscribe(product => this.product = product);
      console.log("This product: ", this.product);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.product) {
      this.productService.updateProduct(this.product)
        .subscribe(() => this.goBack());
    }
  }

}
