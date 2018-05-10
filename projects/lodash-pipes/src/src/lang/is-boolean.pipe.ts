import { Pipe, PipeTransform } from '@angular/core';
import { isBoolean } from "lodash";

@Pipe({
  name: 'isBoolean'
})
export class IsBooleanPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isBoolean(value);
  }

}
