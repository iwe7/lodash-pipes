import { Pipe, PipeTransform } from '@angular/core';
import { flowRight } from "lodash";

@Pipe({
  name: 'flowRight'
})
export class FlowRightPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return flowRight(value);
  }

}
