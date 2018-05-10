import { Pipe, PipeTransform } from '@angular/core';
import { isArrayBuffer } from "lodash";

@Pipe({
  name: 'isArrayBuffer'
})
export class IsArrayBufferPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isArrayBuffer(value);
  }

}
