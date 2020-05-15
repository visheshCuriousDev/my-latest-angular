import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'UTCDate'
})
export class UtcdatePipe implements PipeTransform {

  transform(value) {
    if (value)  {
        const date = new Date( value + 'UTC');
        return  date;
    } else {
          return '';
    }
  }

}
