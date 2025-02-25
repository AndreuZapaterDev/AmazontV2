import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Detergente',
      url: 'https://www.supercash.es/wp-content/uploads/2020/02/detergente-profesional_cabecera.png',
      price: 10.0,
      stars: 4,
      category: 'home',
      /*       discount: 50, */
    },
    {
      id: 2,
      name: 'Monopoly',
      url: 'https://www.monodejuegos.shop/wp-content/uploads/2020/11/monopoly.png',
      price: 20.0,
      stars: 5,
      category: 'toys',
      /*       discount: 25, */
    },
    {
      id: 3,
      name: 'Balón',
      url: 'https://i1.t4s.cz/products/in9365/adidas-euro24-com-679082-in9365.png',
      price: 15.0,
      stars: 3,
      category: 'sports',
      /*       discount: 10, */
    },
    {
      id: 4,
      name: 'Sartén',
      url: 'https://cdn.speedsize.com/7ea397ab-9451-4e4a-a8e0-a877fed40d95/https://www.arcos.com/media/catalog/product/7/1/716400_1.png',
      price: 25.0,
      stars: 4,
      category: 'kitchen',
      /*       discount: 20, */
    },
    {
      id: 5,
      name: 'Camisa',
      url: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/normal/png-546x410px/26501189.png',
      price: 30.0,
      stars: 5,
      category: 'clothes',
      /*       discount: 30, */
    },
    {
      id: 6,
      name: 'Smartphone',
      url: 'https://oukitel.com/cdn/shop/files/1___11.png?v=1732246275&width=600',
      price: 500.0,
      stars: 4,
      category: 'electronic',
      /*       discount: 40, */
    },
    {
      id: 7,
      name: 'Camiseta',
      url: 'https://timshop.timhortons.ca/cdn/shop/files/retro-logo-tshirt-back-1000px.png?v=1707853862&width=1000',
      price: 15.0,
      stars: 4,
      category: 'clothes',
      /*       discount: 0.1, */
    },
    {
      id: 8,
      name: 'Polo',
      url: 'https://www.vilebrequin.com/on/demandware.static/-/Sites-vilebrequin-catalog-master/default/dw32db9fa0/images/PYRE9O00-010/PYRE9O00-010-front-3920x3920.png',
      price: 30.0,
      stars: 5,
      category: 'clothes',
      /*       discount: 0.2, */
    },
  ];
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
