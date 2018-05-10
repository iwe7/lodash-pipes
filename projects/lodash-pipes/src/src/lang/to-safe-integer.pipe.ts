import { Pipe, PipeTransform } from '@angular/core';
import { toSafeInteger } from "lodash";

@Pipe({
  name: 'toSafeInteger'
})
export class ToSafeIntegerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toSafeInteger(value);
  }

}
