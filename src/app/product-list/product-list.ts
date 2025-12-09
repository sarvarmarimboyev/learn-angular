import { Component, inject, signal } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = signal<Product[]>([])
  productService = inject(ProductService);
  constructor() {
    this.productService.getProducts().subscribe({
      next: (data) => this.products.set(data),
      error: (error) => console.log("error fetching products", error),

    })
  }
}
