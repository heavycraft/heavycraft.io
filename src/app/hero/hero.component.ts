import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() image: string;
  @Input() headerTop: string;
  @Input() header: string;
  @Input() subHeader: string;

  @HostBinding('style.backgroundImage') get backgroundImage() {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${this.image}'`);
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
