import { Pipe, PipeTransform } from '@angular/core';
import { invert } from "lodash";

@Pipe({
  name: 'invert'
})
export class InvertPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return invert(value);
  }

}
