import { Pipe, PipeTransform } from '@angular/core';
import { stubArray } from "lodash";

@Pipe({
  name: 'stubArray'
})
export class StubArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return stubArray();
  }

}
