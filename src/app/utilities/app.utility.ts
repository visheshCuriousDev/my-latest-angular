import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UtilityFunctions {
  constructor( ) { }

  /* Check whether an object is empty*/
  isEmpty(obj) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }

  /* Filter Array of objects or strings */
  filterArray(arr, val, key = null) {
    if (key) {
      return arr.filter(f => ('' + f[key]).toLowerCase().includes(('' + val).toLowerCase()));
    } else {
      return arr.filter(f => f.toLowerCase().includes(val.toLowerCase()));
    }
  }

  /**
   * Custom form validators
   * @Description Below functions are used intead for actual form controls.
   *              Because we can customise error messages accordingly here
   *              rather than having to handing in HTML for each field.
   *              We can customise a lot.
   */
  // Required validator function
  public requiredValidator(fieldName: string = '', type: 'select' | 'input' = 'input') {
    return (control: FormControl) => {
      const name = (control.value) ?  control.value.toString() : '';
      if (!name || !name.trim() || name.trim() === '') {
        if (type === 'select') {
          return {
            required: 'Please choose your ' + fieldName
          };
        } else {
          return {
            required: 'Please enter your ' + fieldName
          };
        }
      }
      return null;
    };
  }

  // Required validator function
  public maxlengthValidator(fieldName: string = '', length: number) {
    return (control: FormControl) => {
      const name = (control.value) ?  control.value.toString() : '';
      if (name && !name.trim() || name.trim() === '' || (length && name.length < (length))) {
        return {
          maxlength: `${fieldName} can't be greater than ${length} characters`
        };
      }
      return null;
    };
  }

  // Required validator function
  public minlengthValidator(fieldName: string = '', length: number) {
    return (control: FormControl) => {
      const name = (control.value) ?  control.value.toString() : '';
      if (name && !name.trim() || name.trim() === '' || (length && name.length > (length))) {
        return {
          minlength: `${fieldName} can't be lesser than ${length} characters`
        };
      }
      return null;
    };
  }

  // Email form control validator function
  public emailValidator = (fieldName: string = 'email address') => {
    return (control: FormControl) => {
      const email = (control.value) ?  control.value.toString() : '';
      const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email && !regex.test(email)) {
        return {
          email: 'Please enter a valid ' + fieldName
        };
      }
      return null;
    };
  }

  // Only alpha numeric name validator
  public onlyAlphaNameValidator(fieldName: string = '') {
    return (control: FormControl) => {
      const name = control.value;
      const regex = /^[a-zA-Z_\ ]*$/;
      if (name && !regex.test(name)) {
        return {
          onlyAlphaName: 'Please enter a valid ' + fieldName + '. Only aplabets, space and _ are allowed.'
        };
      }
      return null;
    };
  }

  // Custom 0nly numeric validator for form validation
  public onlyNumberValidator(fieldName: string = '') {
    return (control: FormControl) => {
      const name = control.value;
      const regex = /^[0-9]*$/;
      if (name && !regex.test(name)) {
        return {
          onlyNumber: 'Please enter a valid ' + fieldName + '. Only numbers are allowed.'
        };
      }
      return null;
    };
  }

}
