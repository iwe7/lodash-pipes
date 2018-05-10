import { Pipe, PipeTransform } from '@angular/core';
import { toFinite } from "lodash";

@Pipe({
  name: 'toFinite'
})
export class ToFinitePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toFinite(value);
  }

}
