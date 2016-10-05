import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() brand: string;
  @Input() logo: string;
  @Input() links: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.classList.add('navbar', 'navbar-dark', 'navbar-fixed-top', 'bg-inverse');
  }

}
