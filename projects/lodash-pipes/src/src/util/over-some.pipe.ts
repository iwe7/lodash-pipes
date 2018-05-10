import { Pipe, PipeTransform } from '@angular/core';
import { overSome } from "lodash";

@Pipe({
  name: 'overSome'
})
export class OverSomePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return overSome(value);
  }

}
