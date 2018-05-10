import { Pipe, PipeTransform } from '@angular/core';
import { isError } from "lodash";

@Pipe({
  name: 'isError'
})
export class IsErrorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isError(value);
  }

}
