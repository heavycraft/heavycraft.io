import { Directive, ElementRef, HostListener, Inject, Input, Renderer, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import { WindowRef } from './../window.service';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

@Directive({
  selector: '[nextPage]'
})
export class NextPageDirective implements OnInit {

  @Input('nextPage') nextPage: string;

  button: HTMLElement;
  bottom: number;

  resize$ = Observable.fromEvent(this.window.nativeWindow, 'resize').map(() => 'resize');

  constructor(
    private el: ElementRef,
    private renderer: Renderer,
    private window: WindowRef,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.button = this.renderer.createElement(this.el.nativeElement, 'a');
    this.button.innerHTML = '&darr;';
    this.renderer.setElementClass(this.button, 'next-page', true);
    this.renderer.setElementAttribute(this.button, 'href', `#${this.nextPage}`);
    Observable.fromEvent(this.button, 'click').subscribe(this.goToNext.bind(this));
    this.resize$.subscribe(this.setBottom.bind(this));
    this.setBottom();
  }

  private setBottom(){
    let bottom = this.el.nativeElement.getBoundingClientRect().bottom + this.window.nativeWindow.pageYOffset;
    this.renderer.setElementStyle(this.button, 'top', bottom + 'px');
  }

  private goToNext(event: Event): void {
    let psInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, `#${this.nextPage}`);
    this.pageScrollService.start(psInstance);
    event.preventDefault();
  }

}
