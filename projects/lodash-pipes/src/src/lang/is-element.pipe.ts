import { Pipe, PipeTransform } from '@angular/core';
import { isElement } from "lodash";

@Pipe({
  name: 'isElement'
})
export class IsElementPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isElement(value);
  }

}
