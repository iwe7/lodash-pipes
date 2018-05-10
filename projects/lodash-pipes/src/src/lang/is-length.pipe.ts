import { Pipe, PipeTransform } from '@angular/core';
import { isLength } from "lodash";

@Pipe({
  name: 'isLength'
})
export class IsLengthPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isLength(value);
  }

}
