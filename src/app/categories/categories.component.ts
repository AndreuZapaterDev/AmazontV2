import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Category } from '../interfaces/category.interface';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories: Category[] = [
    { id: 1, name: 'Electrónica', category: 'electronic' },
    { id: 2, name: 'Ropa', category: 'clothes' },
    { id: 3, name: 'Libros', category: 'books' },
    { id: 4, name: 'Hogar', category: 'home' },
    { id: 5, name: 'Juguetes', category: 'toys' },
    { id: 6, name: 'Deportes', category: 'sports' },
    { id: 7, name: 'Cocina', category: 'kitchen' },
  ];

  //Funciones relacionadas con las categorías
  cat1: number = 1;
  cat2: number = 2;
  cat3: number = 3;
  cat4: number = 4;
  cat5: number = 5;

  getCategoryCode(categoryName: string) {
    const category = this.categories.find((cat) => cat.name === categoryName);
    return category?.category;
  }

  getCategory1(): string {
    return this.categories[this.cat1].name;
  }

  getCategory2(): string {
    return this.categories[this.cat2].name;
  }

  getCategory3(): string {
    return this.categories[this.cat3].name;
  }

  getCategory4(): string {
    return this.categories[this.cat4].name;
  }

  getCategory5(): string {
    return this.categories[this.cat5].name;
  }

  nextCategory() {
    const totalCategories = this.categories.length;
    this.cat1 = (this.cat1 + 1) % totalCategories;
    this.cat2 = (this.cat2 + 1) % totalCategories;
    this.cat3 = (this.cat3 + 1) % totalCategories;
    this.cat4 = (this.cat4 + 1) % totalCategories;
    this.cat5 = (this.cat5 + 1) % totalCategories;
  }

  previousCategory() {
    const totalCategories = this.categories.length;
    this.cat1 = (this.cat1 - 1 + totalCategories) % totalCategories;
    this.cat2 = (this.cat2 - 1 + totalCategories) % totalCategories;
    this.cat3 = (this.cat3 - 1 + totalCategories) % totalCategories;
    this.cat4 = (this.cat4 - 1 + totalCategories) % totalCategories;
    this.cat5 = (this.cat5 - 1 + totalCategories) % totalCategories;
  }
}
