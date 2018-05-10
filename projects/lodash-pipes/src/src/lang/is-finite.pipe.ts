import { Pipe, PipeTransform } from '@angular/core';
import { isFinite } from "lodash";

@Pipe({
  name: 'isFinite'
})
export class IsFinitePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isFinite(value);
  }

}
