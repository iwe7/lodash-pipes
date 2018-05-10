import { Pipe, PipeTransform } from '@angular/core';
import { isObjectLike } from "lodash";

@Pipe({
  name: 'isObjectLike'
})
export class IsObjectLikePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isObjectLike(value);
  }

}
