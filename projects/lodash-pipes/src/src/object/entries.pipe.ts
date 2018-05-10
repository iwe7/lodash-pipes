import { Pipe, PipeTransform } from '@angular/core';
import { entries } from "lodash";

@Pipe({
  name: 'entries'
})
export class EntriesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return entries(value);
  }

}
