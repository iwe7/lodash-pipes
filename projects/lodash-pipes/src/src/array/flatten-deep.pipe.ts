import { Pipe, PipeTransform } from '@angular/core';
import { flattenDeep } from "lodash";

@Pipe({
  name: 'flattenDeep'
})
export class FlattenDeepPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return flattenDeep(value);
  }

}
