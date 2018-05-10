import { Pipe, PipeTransform } from '@angular/core';
import { isNil } from "lodash";

@Pipe({
  name: 'isNil'
})
export class IsNilPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isNil(value);
  }

}
