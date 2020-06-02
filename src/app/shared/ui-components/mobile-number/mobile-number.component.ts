import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilityFunctions } from 'src/app/utilities/app.utility';
// Get an instance of `PhoneNumberUtil`.
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

@Component({
  selector: 'app-mobile-number',
  templateUrl: './mobile-number.component.html',
  styleUrls: ['./mobile-number.component.scss']
})
export class MobileNumberComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() contryCode: FormControl;
  @Input() mobileNumber: FormControl;
  countryCodeSearchVal: FormControl;
  countryCodes: Array<any> = [];
  filterCountryCode: Array<any>;
  errorMessage: string;
  selectedCodeName: any;

  constructor(
    private util: UtilityFunctions
  ) {
    // Get the country code list
    const reg = phoneUtil.getSupportedRegions();
    for (const r of reg) {
      this.countryCodes.push({
        phone_code: phoneUtil.getCountryCodeForRegion(r),
        name: r
      });
      this.filterCountryCode = [...this.countryCodes];
    }
  }

  ngOnInit(): void {
    // Intitalise variables
    this.initialise();
    // listen for search field value changes
    this.countryCodeSearchVal.valueChanges
      .subscribe((val) => {
        this.filterCountryCode = this.util.filterArray(this.countryCodes, val, 'phone_code');
      });
    // Check mobile number validity
    this.mobileNumber.valueChanges
      .subscribe(() => {
        this.isPhoneValid();
      });
  }

  /* Initialise all the variables */
  initialise() {
    // Iniialise country code search
    this.countryCodeSearchVal = new FormControl('');
  }

  isPhoneValid(codeName = null) {
    if (codeName) {
      this.selectedCodeName = codeName;
    }
    if (this.mobileNumber.valid && this.mobileNumber.value && this.selectedCodeName) {
      const phoneCheck = phoneUtil.parseAndKeepRawInput(this.mobileNumber.value, this.selectedCodeName);
      if (!phoneUtil.isValidNumber(phoneCheck)) {
        this.errorMessage = 'Please enter a valid phone number';
      } else {
        this.errorMessage = null;
      }
    } else {
      this.errorMessage = null;
    }
  }

}
