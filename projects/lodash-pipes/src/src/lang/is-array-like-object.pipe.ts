import { Pipe, PipeTransform } from '@angular/core';
import { isArrayLikeObject } from "lodash";

@Pipe({
  name: 'isArrayLikeObject'
})
export class IsArrayLikeObjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isArrayLikeObject(value);
  }

}
