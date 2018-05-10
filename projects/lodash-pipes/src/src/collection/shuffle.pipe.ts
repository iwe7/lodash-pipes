import { Pipe, PipeTransform } from '@angular/core';
import { shuffle } from "lodash";

@Pipe({
  name: 'shuffle'
})
export class ShufflePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return shuffle(value);
  }

}
