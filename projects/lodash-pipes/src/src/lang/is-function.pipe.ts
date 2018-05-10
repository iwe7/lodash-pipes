import { Pipe, PipeTransform } from '@angular/core';
import { isFunction } from "lodash";

@Pipe({
  name: 'isFunction'
})
export class IsFunctionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isFunction(value);
  }

}
