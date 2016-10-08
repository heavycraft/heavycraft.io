import { Component, OnInit } from '@angular/core';
import { HeavyCraftService } from '../heavy-craft.service';

@Component({
  selector: 'hc-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: any;
  hasSent = false;
  hasError = false;
  userName: string;

  constructor(private hcService: HeavyCraftService) { }

  ngOnInit() {
    this.hcService.getContact().subscribe( contact => this.contact = contact);
  }

  handleResponse(res) {
    if (res && res.sent) {
      this.hasSent = true;
      this.userName = res.originalMessage.controls.fullName.value;
      console.log(res.originalMessage)
    }
  }

}
