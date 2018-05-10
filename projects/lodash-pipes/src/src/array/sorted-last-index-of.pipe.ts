import { Pipe, PipeTransform } from "@angular/core";
import { sortedLastIndexOf } from "lodash";

@Pipe({
  name: "sortedLastIndexOf"
})
export class SortedLastIndexOfPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return sortedLastIndexOf(value, args);
  }
}
