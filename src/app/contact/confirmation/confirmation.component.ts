import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hc-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  @Input('userName') userName: string;

  constructor() { }

  ngOnInit() {
  }

}
