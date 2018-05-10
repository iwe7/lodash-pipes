import { Pipe, PipeTransform } from '@angular/core';
import { isWeakSet } from "lodash";

@Pipe({
  name: 'isWeakSet'
})
export class IsWeakSetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isWeakSet(value);
  }

}
