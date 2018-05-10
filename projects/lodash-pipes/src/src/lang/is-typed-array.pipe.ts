import { Pipe, PipeTransform } from '@angular/core';
import { isTypedArray } from "lodash";

@Pipe({
  name: 'isTypedArray'
})
export class IsTypedArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isTypedArray(value);
  }

}
