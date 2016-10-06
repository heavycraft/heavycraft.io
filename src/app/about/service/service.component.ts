import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hc-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
