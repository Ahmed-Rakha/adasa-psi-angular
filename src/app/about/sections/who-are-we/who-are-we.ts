import { Component } from '@angular/core';

@Component({
  selector: 'app-who-are-we',
  imports: [],
  templateUrl: './who-are-we.html',
  styleUrl: './who-are-we.css',
})
export class WhoAreWe {
  discoveryItems = [
    { id: 1, title: '+50', description: 'مقالة', icon: 'article' },
    { id: 2, title: '+10ألف', description: 'قارئ', icon: 'groups' },
    { id: 3, title: '4', description: 'تصنيفات', icon: 'folder' },
    { id: 3, title: '6', description: 'كاتب', icon: 'edit' },
  ];
}
