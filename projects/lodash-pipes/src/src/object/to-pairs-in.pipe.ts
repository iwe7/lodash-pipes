import { Pipe, PipeTransform } from '@angular/core';
import { toPairsIn } from "lodash";

@Pipe({
  name: 'toPairsIn'
})
export class ToPairsInPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toPairsIn(value);
  }

}
