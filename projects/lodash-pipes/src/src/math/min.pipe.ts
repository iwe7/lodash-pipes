import { Pipe, PipeTransform } from '@angular/core';
import { min } from "lodash";

@Pipe({
  name: 'min'
})
export class MinPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return min(value);
  }

}
