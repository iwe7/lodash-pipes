import { Pipe, PipeTransform } from '@angular/core';
import { last } from "lodash";

@Pipe({
  name: 'last'
})
export class LastPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return last(value);
  }

}
