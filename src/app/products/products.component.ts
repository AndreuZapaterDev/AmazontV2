import { Component, input } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  product = input.required<Product>();

  numberStars: string = '';
  discountedPrice: number = 0;

  getStars() {
    for (let i = 0; i < this.product().stars; i++) {
      this.numberStars += '⭐';
    }
  }

  getDiscount() {
    const discount = this.product().discount || 0;
    this.discountedPrice =
      this.product().price - (this.product().price * discount) / 100;
    // console.debug('Discounted price:', this.discountedPrice);
  }

  ngOnInit() {
    this.getStars();
    this.getDiscount();
  }
}
