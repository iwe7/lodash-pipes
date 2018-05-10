import { Pipe, PipeTransform } from '@angular/core';
import { matches } from "lodash";

@Pipe({
  name: 'matches'
})
export class MatchesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return matches(value);
  }

}
