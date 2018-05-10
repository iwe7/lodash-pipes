import { Pipe, PipeTransform } from '@angular/core';
import { property } from "lodash";

@Pipe({
  name: 'property'
})
export class PropertyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return property(value);
  }

}
