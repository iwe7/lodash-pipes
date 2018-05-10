import { Pipe, PipeTransform } from '@angular/core';
import { sample } from "lodash";

@Pipe({
  name: 'sample'
})
export class SamplePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return sample(value);
  }

}
