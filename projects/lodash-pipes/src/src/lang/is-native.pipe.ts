import { Pipe, PipeTransform } from '@angular/core';
import { isNative } from "lodash";

@Pipe({
  name: 'isNative'
})
export class IsNativePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isNative(value);
  }

}
