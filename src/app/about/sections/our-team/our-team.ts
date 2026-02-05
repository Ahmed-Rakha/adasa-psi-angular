import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-team',
  imports: [RouterLink],
  templateUrl: './our-team.html',
  styleUrl: './our-team.css',
})
export class OurTeam {
  @Input({ required: true }) authors!: any[];

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
