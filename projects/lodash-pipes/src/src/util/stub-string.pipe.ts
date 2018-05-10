import { Pipe, PipeTransform } from '@angular/core';
import { stubString } from "lodash";

@Pipe({
  name: 'stubString'
})
export class StubStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return stubString();
  }

}
