import { Pipe, PipeTransform } from '@angular/core';
import {isNull, isNullOrUndefined} from "util";

@Pipe({
  name: 'emptyTableValue'
})
export class EmptyTableValuePipe implements PipeTransform {

  transform(value: any, isZero?, dollar?): any {
    if(
      value === ''
      || !(value || isZero)
    ) {
      return '-';
    } else {
      if (isNullOrUndefined(value)) {
        return '-';
      }
      if(dollar){
        value = '$'+value;
      } else {
        /* To convert numbers to string */
        value = '' + value;
      }
      return value.replace('_',' ');
    }
  }

}
