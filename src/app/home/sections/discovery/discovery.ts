import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-discovery',
  imports: [RouterLink],
  templateUrl: './discovery.html',
  styleUrl: './discovery.css',
})
export class Discovery {
  discoveryItems = [
    { id: 1, title: '+50', description: 'مقالة', icon: 'article' },
    { id: 2, title: '+10ألف', description: 'قارئ', icon: 'groups' },
    { id: 3, title: '4', description: 'تصنيفات', icon: 'folder' },
    { id: 3, title: '6', description: 'كاتب', icon: 'edit' },
  ];
}
