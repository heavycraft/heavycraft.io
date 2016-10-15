import { Component, HostBinding, Input, OnInit,
  trigger, state, style, transition, animate } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'hc-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition(':enter', [
        style({
          transform: 'translateY(25%)',
          opacity: 0
        }),
        animate('1.5s cubic-bezier(0.23, 1, 0.32, 1)')
      ])
    ]),
    trigger('fadeIn', [
      state('in', style({opacity: 1})),
      transition(':enter', [style({opacity: 0}), animate('1s 750ms ease-out')])
    ])
  ]
})
export class HeroComponent implements OnInit {

  @Input() image: string;
  @Input() headerTop: string;
  @Input() header: string;
  @Input() subHeader: string;

  @HostBinding('style.backgroundImage') get backgroundImage() {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${this.image}')`);
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
