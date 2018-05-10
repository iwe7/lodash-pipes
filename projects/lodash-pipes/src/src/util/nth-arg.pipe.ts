import { Pipe, PipeTransform } from '@angular/core';
import { nthArg } from "lodash";

@Pipe({
  name: 'nthArg'
})
export class NthArgPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return nthArg(value);
  }

}
