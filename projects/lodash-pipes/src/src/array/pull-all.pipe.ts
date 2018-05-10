import { Pipe, PipeTransform } from '@angular/core';
import { pullAll } from "lodash";

@Pipe({
  name: 'pullAll'
})
export class PullAllPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return pullAll(value,args);
  }

}
