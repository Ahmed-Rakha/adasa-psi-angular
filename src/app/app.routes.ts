import { Routes } from '@angular/router';
import { About } from './about/about';
import { Blog } from './blog/blog';
import { Home } from './home/home';
import { BlogDetails } from './blog/blog-details/blog-details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'blog/:title',
    component: BlogDetails,
  },
];
