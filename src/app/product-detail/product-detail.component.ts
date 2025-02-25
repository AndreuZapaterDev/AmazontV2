import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  productId: number = 0;
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    stars: 0,
    url: '',
    category: '',
  };

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.productId) {
      const product = this.productService.getProduct(this.productId);
      if (product) {
        this.product = product;
        console.debug('Producto', this.product);
      }
    }
  }
}
