import { Pipe, PipeTransform } from '@angular/core';
import { startsWith } from "lodash";

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
