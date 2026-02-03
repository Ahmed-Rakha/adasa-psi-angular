import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  constructor(private router: Router) {}
  @Input({ required: true }) categories!: any[];

  onCategoryClick(categoryName: string) {
    console.log('clicked');
    this.router.navigate(['blog'], { queryParams: { category: categoryName } });
  }
}
