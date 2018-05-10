import { Pipe, PipeTransform } from '@angular/core';
import { attempt } from "lodash";

@Pipe({
  name: 'rangeRight'
})
export class RangeRightPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
