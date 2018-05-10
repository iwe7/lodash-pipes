import { Pipe, PipeTransform } from '@angular/core';
import { identity } from "lodash";

@Pipe({
  name: 'identity'
})
export class IdentityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return identity(value);
  }

}
