import { Pipe, PipeTransform } from '@angular/core';
import { propertyOf } from "lodash";

@Pipe({
  name: 'propertyOf'
})
export class PropertyOfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return propertyOf(value);
  }

}
