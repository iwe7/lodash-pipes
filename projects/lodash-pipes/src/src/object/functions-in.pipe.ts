import { Pipe, PipeTransform } from '@angular/core';
import { functionsIn } from "lodash";

@Pipe({
  name: 'functionsIn'
})
export class FunctionsInPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return functionsIn(value);
  }

}
