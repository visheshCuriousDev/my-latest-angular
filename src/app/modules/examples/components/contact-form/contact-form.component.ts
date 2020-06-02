import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initialise();
  }

  initialise() {
    this.contactForm = new FormGroup ({
      mobileNumber: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(6)]),
      contryCode: new FormControl('', Validators.required),
    });
  }

}
