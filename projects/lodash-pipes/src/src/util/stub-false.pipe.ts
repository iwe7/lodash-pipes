import { Pipe, PipeTransform } from '@angular/core';
import { stubFalse } from "lodash";

@Pipe({
  name: 'stubFalse'
})
export class StubFalsePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return stubFalse();
  }

}
