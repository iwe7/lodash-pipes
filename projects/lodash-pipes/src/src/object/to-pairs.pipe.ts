import { Pipe, PipeTransform } from '@angular/core';
import { toPairs } from "lodash";

@Pipe({
  name: 'toPairs'
})
export class ToPairsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toPairs(value);
  }

}
