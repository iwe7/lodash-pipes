import { Pipe, PipeTransform } from '@angular/core';
import { isInteger } from "lodash";

@Pipe({
  name: 'isInteger'
})
export class IsIntegerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isInteger(value);
  }

}
