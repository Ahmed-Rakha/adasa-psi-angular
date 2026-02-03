import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() logo: string = '';
  @Input() name: string = '';
  @Input() tagline: string = '';

  get logoUrl() {
    return `./assets/images/${this.logo}`;
  }
}
