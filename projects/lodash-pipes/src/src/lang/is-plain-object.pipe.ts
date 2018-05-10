import { Pipe, PipeTransform } from '@angular/core';
import { isPlainObject } from "lodash";

@Pipe({
  name: 'isPlainObject'
})
export class IsPlainObjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isPlainObject(value);
  }

}
