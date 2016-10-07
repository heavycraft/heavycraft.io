import { Component } from '@angular/core';
import { HeavyCraftService } from './heavy-craft.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  hero: any;
  heroIsLoading = true;

  brand = {
    name: 'Heavy Craft',
    logo: 'assets/logo.svg',
    location: 'Portland Oregon USA'
  };

  navigation = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  constructor(private hcService: HeavyCraftService) {
    hcService.getHero().subscribe( (hero) => {
      this.hero = hero;
      this.heroIsLoading = false;
    });
  }

}
