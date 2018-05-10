import { Pipe, PipeTransform } from '@angular/core';
import { overEvery } from "lodash";

@Pipe({
  name: 'overEvery'
})
export class OverEveryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return overEvery(value);
  }

}
