import { Pipe, PipeTransform } from '@angular/core';
import { sortedUniq } from "lodash";

@Pipe({
  name: 'sortedUniq'
})
export class SortedUniqPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return sortedUniq(value);
  }

}
