import { Pipe, PipeTransform } from "@angular/core";
import { sortedIndexOf } from "lodash";

@Pipe({
  name: "sortedIndexOf"
})
export class SortedIndexOfPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return sortedIndexOf(value, args);
  }
}
