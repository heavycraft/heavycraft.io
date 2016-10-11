import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MailService } from './../../mail.service';

@Component({
  selector: 'hc-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Output() response = new EventEmitter();
  submitted = false;
  contactForm: FormGroup;
  fullName = new FormControl('', Validators.required);
  emailAddress = new FormControl('',
    Validators.compose([
      Validators.required,
      GlobalValidator.mailFormat
    ]));
  message = new FormControl('',
    Validators.compose([
      Validators.required,
      GlobalValidator.minWords(5)
    ]));

  constructor(private fb: FormBuilder, private mail: MailService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      'fullName': this.fullName,
      'email': this.emailAddress,
      'message': this.message
    });
  }

  onSubmit() {
    this.submitted = true;
    this.contactForm.disable();
    this.mail.send({
      to: 'contact@heavycraft.io',
      from: 'notifications@heavycraft.io',
      subject: 'New Message from ' + this.fullName.value,
      text: `
        ${this.message.value}
        \n\nContact:
        \n${this.fullName.value}
        \n${this.emailAddress.value}
      `,
      html: `
        <p>${this.message.value}</p>
        <h4>Contact:</h4>
        <p>
          <a href="mailto:${this.emailAddress.value}">${this.fullName.value}</a>
        </p>
      `
    }).subscribe((res) => {
      this.response.emit({
        sent: true,
        originalMessage: this.contactForm
      });
    });

  }
}

interface ValidationResult {
  [key: string]: boolean;
}

class GlobalValidator {

  static mailFormat(control: FormControl): ValidationResult {

    const EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

    if (control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return { 'incorrectMailFormat': true };
    }
    return null;
  }

  static minWords(min: number) {

    return (control: FormControl) => {
      if (control.value.split(/\s+/).length < min) {
        return { 'notEnoughWords': true };
      }
      return null;
    };

  }

}
