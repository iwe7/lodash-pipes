import { Pipe, PipeTransform } from '@angular/core';
import { isSymbol } from "lodash";

@Pipe({
  name: 'isSymbol'
})
export class IsSymbolPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return isSymbol(value);
  }

}
