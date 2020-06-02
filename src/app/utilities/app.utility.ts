import { Injectable } from '@angular/core';

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

}
