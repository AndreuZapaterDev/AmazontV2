import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product, Review } from '../interfaces/product.interface';
import { ProductsComponent } from '../products/products.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductsComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  productId: number = 0;
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    stars: 0,
    url: '',
    category: '',
  };
  
  mainImage: string = '';
  productImages: string[] = [];
  activeImageIndex: number = 0;

  quantity: number = 1;
  numberStars: string = '';
  discountedPrice: number = 0;
  activeTab: string = 'description';
  reviews: Review[] = [];
  relatedProducts: Product[] = [];
  private routeSub!: Subscription;

  visibleReviews: Review[] = [];
  maxInitialReviews: number = 2;
  showingAllReviews: boolean = false;


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Suscribirse a los cambios de parámetros en lugar de obtener el valor una sola vez
    this.routeSub = this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.productId = Number(idParam);
        this.loadProductDetails();
      }
    });
  }

  ngOnDestroy() {
    // Limpiar suscripciones al destruir el componente
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  loadProductDetails() {
    const product = this.productService.getProduct(this.productId);
    if (product) {
      this.product = product;

      this.reviews = this.product.reviews || [];
      this.visibleReviews = this.reviews.slice(0, this.maxInitialReviews);

      this.mainImage = this.product.url;
      this.productImages = [
        this.product.url,
        '/images/product-angle-1.jpg',
        '/images/product-angle-2.jpg'
      ];

      this.activeImageIndex = 0;
      this.generateStars();
      this.calculateDiscountedPrice();
      this.loadRelatedProducts();
      
      // Resetear el estado de la vista
      this.quantity = 1;
      this.activeTab = 'description';
      this.showingAllReviews = false;

      window.scrollTo(0, 0);
    }
  }

  changeMainImage(imageUrl: string, index: number) {
    // Añadir clase para fade out
    const imgElement = document.querySelector('.main-image img');
    if (imgElement) {
      imgElement.classList.add('image-fade');
      
      // Cambiar la imagen después de un breve retraso
      setTimeout(() => {
        this.mainImage = imageUrl;
        this.activeImageIndex = index;
        
        // Quitar la clase para fade in
        setTimeout(() => {
          imgElement.classList.remove('image-fade');
        }, 50);
      }, 300);
    } else {
      this.mainImage = imageUrl;
      this.activeImageIndex = index;
    }
  }

  loadRelatedProducts() {
    // Obtener todos los productos de la misma categoría excepto el actual
    const allProducts = this.productService.getProducts();
    this.relatedProducts = allProducts.filter(p => 
      p.category === this.product.category && p.id !== this.product.id
    ).slice(0, 4); // Mostrar hasta 4 productos relacionados
  }

  navigateToProduct(product: Product) {
    this.router.navigate(['/home/product', product.id]);
  }

  generateStars() {
    this.numberStars = '⭐'.repeat(this.product.stars);
  }

  calculateDiscountedPrice() {
    if (this.product.discount) {
      this.discountedPrice = this.product.price - (this.product.price * this.product.discount / 100);
    } else {
      this.discountedPrice = this.product.price;
    }
  }

  increaseQuantity() {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
  
  getStarsForRating(rating: number): string {
    return '⭐'.repeat(rating);
  }
  
  // Calcular estadísticas de reseñas para mostrar en el panel de opiniones
  get reviewStats() {
    const stats = {
      total: this.reviews.length,
      average: 0,
      distribution: [0, 0, 0, 0, 0] // Conteo para 1-5 estrellas
    };
    
    if (stats.total > 0) {
      let sum = 0;
      this.reviews.forEach(review => {
        sum += review.rating;
        stats.distribution[review.rating - 1]++;
      });
      stats.average = Math.round((sum / stats.total) * 10) / 10;
    }
    
    return stats;
  }

  loadReviews() {
    this.reviews = this.product.reviews || [];
    this.visibleReviews = this.reviews.slice(0, this.maxInitialReviews);
  }

  showMoreReviews() {
    if (!this.showingAllReviews) {
      this.visibleReviews = this.reviews;
      this.showingAllReviews = true;
    } else {
      this.visibleReviews = this.reviews.slice(0, this.maxInitialReviews);
      this.showingAllReviews = false;
    }
  }

}