import { Component, OnInit } from '@angular/core';
import { HeavyCraftService } from '../heavy-craft.service';

@Component({
  selector: 'hc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: any;
  services: any;

  constructor(private hcService: HeavyCraftService) {
    hcService.getAbout().subscribe( about => this.about = about );
    this.services = hcService.getServices();
  }

  ngOnInit() {
  }

}
