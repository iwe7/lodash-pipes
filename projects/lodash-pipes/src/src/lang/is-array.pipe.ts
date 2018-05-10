import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from "lodash";

@Pipe({
  name: 'isArray'
})
export class IsArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isArray(value);
  }

}
