import { Pipe, PipeTransform } from '@angular/core';
import { toLower } from "lodash";

@Pipe({
  name: 'toLower'
})
export class ToLowerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toLower(value);
  }

}
