import { Pipe, PipeTransform } from '@angular/core';
import { toUpper } from "lodash";

@Pipe({
  name: 'toUpper'
})
export class ToUpperPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toUpper(value);
  }

}
