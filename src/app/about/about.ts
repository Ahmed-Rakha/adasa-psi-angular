import { Component } from '@angular/core';
import { WhoAreWe } from './sections/who-are-we/who-are-we';
import { OurValues } from './sections/our-values/our-values';
import { OurTeam } from './sections/our-team/our-team';

import { DUMMY_DATA } from '../posts';
import { ContactUs } from './sections/contact-us/contact-us';

@Component({
  selector: 'app-about',
  imports: [WhoAreWe, OurValues, OurTeam, ContactUs],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  posts = DUMMY_DATA.posts;

  get getAuthors() {
    return this.posts.map((post, index) => {
      return { ...post.author, id: index + 1 };
    });
  }
}
