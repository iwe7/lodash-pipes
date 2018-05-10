import { Pipe, PipeTransform } from '@angular/core';
import { toPlainObject } from "lodash";

@Pipe({
  name: 'toPlainObject'
})
export class ToPlainObjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toPlainObject(value);
  }

}
