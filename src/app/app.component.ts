import { Component } from '@angular/core';
import { HeavyCraftService } from './heavy-craft.service';
import { Observable } from 'rxjs/Observable';
import { PageScrollConfig } from 'ng2-page-scroll';

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
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  constructor(private hcService: HeavyCraftService) {
    hcService.getHero().subscribe( (hero) => {
      this.hero = hero;
      this.heroIsLoading = false;
    });

    PageScrollConfig.defaultDuration = 750;
    PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
  }

}
