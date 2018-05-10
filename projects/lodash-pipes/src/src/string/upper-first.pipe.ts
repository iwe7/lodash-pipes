import { Pipe, PipeTransform } from '@angular/core';
import { upperFirst } from "lodash";

@Pipe({
  name: 'upperFirst'
})
export class UpperFirstPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return upperFirst(value);
  }

}
