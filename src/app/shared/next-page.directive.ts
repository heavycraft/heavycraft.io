import { Directive, ElementRef, Input, Renderer, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[nextPage]'
})
export class NextPageDirective implements AfterViewInit {

  @Input('nextPage') nextPage: string;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {
    let height = 50;
    let margin = 50;
    let bottom = this.el.nativeElement.getBoundingClientRect().bottom - height - margin;
    let button = this.renderer.createElement(this.el.nativeElement, 'a');
    button.innerHTML = '&darr;';
    this.renderer.setElementClass(button, 'next-page', true);
    this.renderer.setElementAttribute(button, 'href', `#${this.nextPage}`);
    this.renderer.setElementStyle(button, 'top', bottom + 'px');
    this.renderer.setElementStyle(button, 'fontSize', `${height}px`);
    this.renderer.setElementStyle(button, 'lineHeight', `${height}px`);
  }

}
