import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'initcaps'
})
export class InitcapsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!isNullOrUndefined(value)) {
      return value.substring(0, 1).toUpperCase() + value.substring(1);
    }
  }

}
