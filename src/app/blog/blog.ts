import { Component } from '@angular/core';
import { BlogGrid } from './sections/blog-grid/blog-grid';
import { BlogHeader } from './sections/blog-header/blog-header';

import { DUMMY_DATA } from '../posts';
@Component({
  selector: 'app-blog',
  imports: [BlogGrid, BlogHeader],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  posts = DUMMY_DATA.posts;
  categories = DUMMY_DATA.categories;
}
