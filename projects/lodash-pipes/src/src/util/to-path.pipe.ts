import { Pipe, PipeTransform } from '@angular/core';
import { toPath } from "lodash";

@Pipe({
  name: 'toPath'
})
export class ToPathPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return toPath(value);
  }

}
