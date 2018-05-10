import { Pipe, PipeTransform } from '@angular/core';
import { toInteger } from "lodash";

@Pipe({
  name: 'toInteger'
})
export class ToIntegerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toInteger(value);
  }

}
