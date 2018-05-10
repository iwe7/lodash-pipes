import { Pipe, PipeTransform } from '@angular/core';
import { toString } from "lodash";

@Pipe({
  name: 'toString'
})
export class ToStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toString(value);
  }

}
