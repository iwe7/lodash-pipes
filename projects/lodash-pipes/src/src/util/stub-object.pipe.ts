import { Pipe, PipeTransform } from '@angular/core';
import { stubObject } from "lodash";

@Pipe({
  name: 'stubObject'
})
export class StubObjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return stubObject();
  }

}
