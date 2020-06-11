import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilityFunctions } from 'src/app/utilities/app.utility';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private util: UtilityFunctions
  ) { }

  ngOnInit(): void {
    this.initialise();
  }

  initialise() {
    this.contactForm = new FormGroup ({
      mobileNumber: new FormControl('', [
        this.util.requiredValidator('phone number'),
        this.util.minlengthValidator('Phone number', 6),
        this.util.maxlengthValidator('Phone number', 15),
        this.util.onlyNumberValidator('phone number')
      ]),
      contryCode: new FormControl('', this.util.requiredValidator('phone code')),
    });
  }

}
