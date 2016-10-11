import { Directive, ElementRef, HostListener, Input, Renderer, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import { WindowRef } from './../window.service';

@Directive({
  selector: '[nextPage]'
})
export class NextPageDirective implements OnInit {

  @Input('nextPage') nextPage: string;

  button: HTMLElement;
  bottom: number;

  resize$ = Observable.fromEvent(this.window.nativeWindow, 'resize').map(() => 'resize');

  constructor(private el: ElementRef, private renderer: Renderer, private window: WindowRef) { }

  ngOnInit() {
    this.button = this.renderer.createElement(this.el.nativeElement, 'a');
    this.button.innerHTML = '&darr;';
    this.renderer.setElementClass(this.button, 'next-page', true);
    this.renderer.setElementAttribute(this.button, 'href', `#${this.nextPage}`);
    this.setBottom();

    this.resize$.subscribe( (scrolling) => {
      this.setBottom();
    });
  }

  private setBottom(){
    let bottom = this.el.nativeElement.getBoundingClientRect().bottom + this.window.nativeWindow.pageYOffset;
    this.renderer.setElementStyle(this.button, 'top', bottom + 'px');
  }

}
