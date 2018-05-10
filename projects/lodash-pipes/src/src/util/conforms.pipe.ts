import { Pipe, PipeTransform } from '@angular/core';
import { conforms } from "lodash";

@Pipe({
  name: 'conforms'
})
export class ConformsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return conforms(value);
  }

}
