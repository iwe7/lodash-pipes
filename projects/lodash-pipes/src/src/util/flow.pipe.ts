import { Pipe, PipeTransform } from '@angular/core';
import { flow } from "lodash";

@Pipe({
  name: 'flow'
})
export class FlowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return flow(value);
  }

}
