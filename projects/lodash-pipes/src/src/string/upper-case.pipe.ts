import { Pipe, PipeTransform } from '@angular/core';
import { upperCase } from "lodash";

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return upperCase(value);
  }

}
