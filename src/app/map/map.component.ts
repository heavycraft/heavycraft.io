import { Component, ElementRef, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MAP_STYLE } from './map.style';
import { HeavyCraftService } from '../heavy-craft.service';


@Component({
  selector: 'hc-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  location: any;
  style = MAP_STYLE;

  constructor(private hcService: HeavyCraftService) { }

  ngOnInit() {
    this.hcService.getLocation().subscribe( location => this.location = location);
  }

  ngAfterViewInit() {

  }

}
