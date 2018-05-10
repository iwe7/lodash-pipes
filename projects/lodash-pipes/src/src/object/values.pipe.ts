import { Pipe, PipeTransform } from '@angular/core';
import { values } from "lodash";

@Pipe({
  name: 'values'
})
export class ValuesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return values(value);
  }

}
