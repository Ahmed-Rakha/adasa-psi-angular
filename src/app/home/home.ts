import { Component } from '@angular/core';
import { Discovery } from './sections/discovery/discovery';
import { SelectedArticles } from './sections/selected-articles/selected-articles';
import { Categories } from './sections/categories/categories';

import { DUMMY_DATA } from '../posts';
import { LatestArticles } from './sections/latest-articles/latest-articles';

@Component({
  selector: 'app-home',
  imports: [Discovery, SelectedArticles, Categories, LatestArticles],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  posts = DUMMY_DATA.posts;
  categories = DUMMY_DATA.categories;
  siteInfo = DUMMY_DATA.siteInfo;
}
