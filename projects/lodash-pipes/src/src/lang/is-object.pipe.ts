import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from "lodash";

@Pipe({
  name: 'isObject'
})
export class IsObjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isObject(value);
  }

}
