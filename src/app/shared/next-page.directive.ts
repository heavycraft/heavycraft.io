import { Directive, ElementRef, HostListener, Input, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[nextPage]'
})
export class NextPageDirective implements OnInit {

  @Input('nextPage') nextPage: string;

  button: HTMLElement;
  bottom: number;

  @HostListener('window:resize')
  onResize() {
    this.setBottom();
  }

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.button = this.renderer.createElement(this.el.nativeElement, 'a');
    this.button.innerHTML = '&darr;';
    this.renderer.setElementClass(this.button, 'next-page', true);
    this.renderer.setElementAttribute(this.button, 'href', `#${this.nextPage}`);
    this.setBottom();
  }

  private setBottom(){
    let bottom = this.el.nativeElement.getBoundingClientRect().bottom;
    this.renderer.setElementStyle(this.button, 'top', bottom + 'px');
  }

}
