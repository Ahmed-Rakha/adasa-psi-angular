import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-latest-articles',
  imports: [RouterLink],
  templateUrl: './latest-articles.html',
  styleUrl: './latest-articles.css',
})
export class LatestArticles {
  constructor(private router: Router) {}
  @Input({ required: true }) articles!: any[];
  get getLatestArticles() {
    const todayTimeStamp = Date.now();
    const threshold = 1000 * 60 * 60 * 24 * 30;
    return this.articles.filter(
      (article) => new Date(article.date).getTime() > todayTimeStamp - threshold,
    );
  }
  onArticleClick(slug: string) {
    this.router.navigate(['blog', slug]);
    console.log(slug);
  }
}
