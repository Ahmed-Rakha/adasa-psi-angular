import { Component, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-selected-articles',
  imports: [RouterLink],
  templateUrl: './selected-articles.html',
  styleUrl: './selected-articles.css',
})
export class SelectedArticles {
  constructor(private router: Router) {}
  @Input({ required: true }) articles!: any[];

  get getFeaturedArticles() {
    return this.articles.filter((article) => article.featured);
  }
  onArticleClick(slug: string) {
    this.router.navigate(['blog', slug]);
  }
}
