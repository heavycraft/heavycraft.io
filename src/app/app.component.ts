import { Component } from '@angular/core';

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
}
