import { Pipe, PipeTransform } from '@angular/core';
import { zip } from "lodash";

@Pipe({
  name: 'zip'
})
export class ZipPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return zip(value);
  }

}
