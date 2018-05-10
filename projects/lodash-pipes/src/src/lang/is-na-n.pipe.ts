import { Pipe, PipeTransform } from '@angular/core';
import { isNaN } from "lodash";

@Pipe({
  name: 'isNaN'
})
export class IsNaNPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isNaN(value);
  }

}
