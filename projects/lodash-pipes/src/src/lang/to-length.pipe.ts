import { Pipe, PipeTransform } from '@angular/core';
import { toLength } from "lodash";

@Pipe({
  name: 'toLength'
})
export class ToLengthPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toLength(value);
  }

}
