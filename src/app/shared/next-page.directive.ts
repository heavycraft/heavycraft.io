import { Directive, ElementRef, HostListener, Input, Renderer, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[nextPage]'
})
export class NextPageDirective implements AfterViewInit {

  @Input('nextPage') nextPage: string;

  button: HTMLElement;
  bottom: number;
  height = 50;
  margin = 50;

  @HostListener('window:resize')
  onResize() {
    this.setBottom();
  }

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {
    this.button = this.renderer.createElement(this.el.nativeElement, 'a');
    this.button.innerHTML = '&darr;';
    this.renderer.setElementClass(this.button, 'next-page', true);
    this.renderer.setElementAttribute(this.button, 'href', `#${this.nextPage}`);
    this.renderer.setElementStyle(this.button, 'fontSize', `${this.height}px`);
    this.renderer.setElementStyle(this.button, 'lineHeight', `${this.height}px`);
    this.setBottom();
  }

  private setBottom(){
    let bottom = this.el.nativeElement.getBoundingClientRect().bottom - this.height - this.margin;
    this.renderer.setElementStyle(this.button, 'top', bottom + 'px');
  }

}
