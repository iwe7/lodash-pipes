import { Pipe, PipeTransform } from '@angular/core';
import { first } from "lodash";

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return first(value);
  }

}
