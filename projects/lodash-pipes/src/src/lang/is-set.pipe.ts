import { Pipe, PipeTransform } from '@angular/core';
import { isSet } from "lodash";

@Pipe({
  name: 'isSet'
})
export class IsSetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isSet(value);
  }

}
