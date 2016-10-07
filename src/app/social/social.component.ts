import { Component, OnInit } from '@angular/core';
import { HeavyCraftService } from '../heavy-craft.service';

@Component({
  selector: 'hc-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  social: any;

  constructor(private hcService: HeavyCraftService) { }

  ngOnInit() {
    this.social = this.hcService.getSocial();
  }

}
