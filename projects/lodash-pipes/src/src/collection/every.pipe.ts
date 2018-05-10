import { Pipe, PipeTransform } from '@angular/core';
import { every } from "lodash";

@Pipe({
  name: 'every'
})
export class EveryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return every(value,args);
  }

}
