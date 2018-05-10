import { Pipe, PipeTransform } from '@angular/core';
import { valuesIn } from "lodash";

@Pipe({
  name: 'valuesIn'
})
export class ValuesInPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return valuesIn(value);
  }

}
