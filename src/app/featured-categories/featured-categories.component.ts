import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Category } from '../interfaces/category.interface';

@Component({
  selector: 'app-featured-categories',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './featured-categories.component.html',
  styleUrl: './featured-categories.component.css'
})
export class FeaturedCategoriesComponent implements OnInit {

  featuredCategories: Category[] = [
    { id: 1, name: 'Electrónica', category: 'electronic' },
    { id: 2, name: 'Ropa', category: 'clothes' },
    { id: 3, name: 'Deportes', category: 'sports' }
  ];
  
  constructor() {}
  
  ngOnInit(): void {}
}