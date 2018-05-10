import { Pipe, PipeTransform } from '@angular/core';
import { head } from "lodash";

@Pipe({
  name: 'sortedLastIndex'
})
export class SortedLastIndexPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
