import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from "lodash";

@Pipe({
  name: 'isUndefined'
})
export class IsUndefinedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isUndefined(value);
  }

}
