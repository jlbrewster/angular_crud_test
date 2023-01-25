import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MockProducts } from './models/Mock-products';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const _mockProducts: Product[] = MockProducts
    return {_mockProducts};
  }
}
