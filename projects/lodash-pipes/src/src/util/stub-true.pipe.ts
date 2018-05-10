import { Pipe, PipeTransform } from '@angular/core';
import { stubTrue } from "lodash";

@Pipe({
  name: 'stubTrue'
})
export class StubTruePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return stubTrue();
  }

}
