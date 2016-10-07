import { Component, ElementRef, HostListener, ViewChildren, Input, OnInit, Renderer, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'hc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  @Input() brand: string;
  @Input() logo: string;
  @Input() links: any;
  @ViewChildren('navItems') childChildren: QueryList<ElementRef>;
  isCollapsed = true;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.el.nativeElement.classList.add('navbar', 'navbar-dark', 'navbar-fixed-top', 'bg-inverse');
  }

  ngAfterViewInit() {
    this.childChildren.forEach( (child) => {
      this.renderer.listen(child.nativeElement, 'click', (event) => {
        this.collapseNavigation();
      });
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.collapseNavigation();
  }

  private collapseNavigation() {
    this.isCollapsed = true;
  }

}
