import { Pipe, PipeTransform } from '@angular/core';
import { toArray } from "lodash";

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toArray(value);
  }

}
