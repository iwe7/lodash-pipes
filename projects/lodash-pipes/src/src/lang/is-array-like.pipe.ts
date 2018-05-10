import { Pipe, PipeTransform } from '@angular/core';
import { isArrayLike } from "lodash";

@Pipe({
  name: 'isArrayLike'
})
export class IsArrayLikePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isArrayLike(value);
  }

}
