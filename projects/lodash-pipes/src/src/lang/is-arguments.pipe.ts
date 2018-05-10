import { Pipe, PipeTransform } from '@angular/core';
import { isArguments } from "lodash";

@Pipe({
  name: 'isArguments'
})
export class IsArgumentsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isArguments(value);
  }

}
