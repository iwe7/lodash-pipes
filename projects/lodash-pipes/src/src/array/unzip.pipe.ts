import { Pipe, PipeTransform } from '@angular/core';
import { unzip } from "lodash";

@Pipe({
  name: 'unzip'
})
export class UnzipPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return unzip(value);
  }

}
