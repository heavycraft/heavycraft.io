import { Component } from '@angular/core';
import { HeavyCraftService } from './heavy-craft.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  brand = {
    name: 'Heavy Craft',
    logo: 'assets/logo.svg'
  };

  navigation = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  hero = {
    image: 'http://api.heavycraft.io/storage/uploads/00000000002.png',
    headerTop: 'We are',
    header: 'Heavy Craft',
    subHeader: 'A Design & Development Company'
  };

  test: Observable<any>;

  constructor(private hcService: HeavyCraftService) {
    this.test = hcService.getHero();
  }

}
