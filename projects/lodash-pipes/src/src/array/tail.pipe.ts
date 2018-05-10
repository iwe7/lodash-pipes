import { Pipe, PipeTransform } from '@angular/core';
import { tail } from "lodash";

@Pipe({
  name: 'tail'
})
export class TailPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return tail(value);
  }

}
