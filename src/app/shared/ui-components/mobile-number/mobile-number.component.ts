import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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
  errorMessage: string | boolean;
  selectedCodeName: any;

  constructor(
    private util: UtilityFunctions,
    private ref: ChangeDetectorRef
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

  /* Function to check phone number validity */
  isPhoneValid(codeName = null) {
    if (codeName) {
      this.selectedCodeName = codeName;
    }
    if ( (this.mobileNumber.valid || this.mobileNumber.errors.incorrect)
        && this.mobileNumber.value && this.selectedCodeName) {
      const phoneCheck = phoneUtil.parseAndKeepRawInput(this.mobileNumber.value, this.selectedCodeName);
      if (!phoneUtil.isValidNumber(phoneCheck)) {
        /* If phone invalid set error */
        this.mobileNumber.setErrors({incorrect: 'Please enter a valid phone number'});
        this.mobileNumber.markAsTouched();
      } else {
        /* If phone valid remove the error */
        this.mobileNumber.setErrors(null);
      }
    }
  }

}
