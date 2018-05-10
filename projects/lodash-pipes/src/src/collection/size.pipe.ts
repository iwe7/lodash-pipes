import { Pipe, PipeTransform } from '@angular/core';
import { size } from "lodash";

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return size(value);
  }

}
