import { Component, computed, input, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-grid',
  imports: [CommonModule],
  templateUrl: './blog-grid.html',
  styleUrl: './blog-grid.css',
})
export class BlogGrid {
  constructor(private route: ActivatedRoute) {}
  @Input({ required: true }) articles!: any[];
  @Input({ required: true }) categories!: any[];
  selectedTab = signal<string>('جميع المقالات');
  selectedGridView = signal<string>('grid');
  searchValue = signal<string>('');
  filteredArticles: any[] = [];

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const category = params.get('category');
      if (category) {
        this.filteredArticles = this.articles.filter(
          (article: any) => article.category === category,
        );
        this.selectedTab.set(category);
        window.scrollTo(0, 0);
      } else {
        this.filteredArticles = [...this.articles];
        this.selectedTab.set('جميع المقالات');
        window.scrollTo(0, 0);
      }
    });
  }
  ngOnChanges() {
    this.filteredArticles = [...this.articles];
  }

  get getCategoriesTabs() {
    const tabs = this.categories.map((category: any) => category.name);
    const allTabs = ['جميع المقالات', ...tabs];
    return allTabs;
  }

  handleTabClick(tabName: string) {
    this.selectedTab.set(tabName);
    if (tabName === 'جميع المقالات' && this.searchValue() === '') {
      this.filteredArticles = [...this.articles];
    } else if (tabName === 'جميع المقالات' && this.searchValue() !== '') {
      this.filteredArticles = this.articles.filter(
        (article: any) =>
          article.title.toLowerCase().includes(this.searchValue().toLowerCase().trim()) ||
          article.excerpt.toLowerCase().includes(this.searchValue().toLowerCase().trim()),
      );
    } else if (tabName !== 'جميع المقالات' && this.searchValue() === '') {
      this.filteredArticles = this.articles.filter((article: any) => article.category === tabName);
    } else if (tabName !== 'جميع المقالات' && this.searchValue() !== '') {
      this.filteredArticles = this.articles
        .filter((article: any) => article.category === tabName)
        .filter(
          (article: any) =>
            article.title.toLowerCase().includes(this.searchValue().toLowerCase().trim()) ||
            article.excerpt.toLowerCase().includes(this.searchValue().toLowerCase().trim()),
        );
    }
  }

  handleGridToggle(gridViewType: string) {
    this.selectedGridView.set(gridViewType);
  }
  handleSearch(value: string) {
    if (value === '') {
      this.selectedTab.set('جميع المقالات');
      this.filteredArticles = [...this.articles];
    } else {
      this.searchValue.set(value);
      if (this.selectedTab() !== 'جميع المقالات') {
        this.filteredArticles = this.filteredArticles.filter(
          (article: any) =>
            article.title.toLowerCase().includes(value.toLowerCase().trim()) ||
            article.excerpt.toLowerCase().includes(value.toLowerCase().trim()),
        );
      } else {
        this.filteredArticles = this.articles.filter(
          (article: any) =>
            article.title.toLowerCase().includes(value.toLowerCase().trim()) ||
            article.excerpt.toLowerCase().includes(value.toLowerCase().trim()),
        );
      }
    }
  }
}
