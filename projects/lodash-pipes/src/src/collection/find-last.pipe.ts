import { Pipe, PipeTransform } from '@angular/core';
import { findLast } from "lodash";

@Pipe({
  name: 'findLast'
})
export class FindLastPipe implements PipeTransform {

  transform(value: any, args?: any, index?: any): any {
    return findLast(value, args, index);
  }

}
