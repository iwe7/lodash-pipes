import { Pipe, PipeTransform } from '@angular/core';
import { isWeakMap } from "lodash";

@Pipe({
  name: 'isWeakMap'
})
export class IsWeakMapPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isWeakMap(value);
  }

}
