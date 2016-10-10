import { Directive, ElementRef, HostListener, Input, Renderer, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';

@Directive({
  selector: '[nextPage]'
})
export class NextPageDirective implements OnInit {

  @Input('nextPage') nextPage: string;

  button: HTMLElement;
  bottom: number;
  resize$ = Observable.fromEvent(window, 'resize')
      .do(this.hide.bind(this))
      .debounceTime(250)
      .delay(250);

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.button = this.renderer.createElement(this.el.nativeElement, 'a');
    this.button.innerHTML = '&darr;';
    this.renderer.setElementClass(this.button, 'next-page', true);
    this.renderer.setElementAttribute(this.button, 'href', `#${this.nextPage}`);
    this.setBottom();

    this.resize$.subscribe( () => {
      this.setBottom();
      this.show();
    });
  }

  private setBottom(){
    let bottom = this.el.nativeElement.getBoundingClientRect().bottom;
    this.renderer.setElementStyle(this.button, 'top', bottom + 'px');
  }

  private hide() {
    this.renderer.setElementStyle(this.button, 'opacity', '0');
  }

  private show() {
    this.renderer.setElementStyle(this.button, 'opacity', '1');
  }

}
