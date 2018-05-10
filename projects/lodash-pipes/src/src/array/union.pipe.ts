import { Pipe, PipeTransform } from '@angular/core';
import { union } from "lodash";

@Pipe({
  name: 'union'
})
export class UnionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return union(value);
  }

}
